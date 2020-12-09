import React, { memo, useState, useEffect } from "react";
import { makeStyles, Box, IconButton } from "@material-ui/core";
import { CustomerLayout } from "../../../layouts";
import { useTranslation } from "react-i18next";
import { CheckCircle, AddCircle, RemoveCircle } from "@material-ui/icons";
import PopupListItems from "./Components/popupListItems";
import CustomerAction from "../../../redux/customer.redux";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const OrderItems = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const dispatch = useDispatch();
  const { categoryId } = useParams();

  const dataItem = useSelector((state) => state.customerRedux.item);

  const [dataShow, setDataShow] = useState([]);
  const [listTotal, setListTotal] = useState([]);
  const [listChecked, setListChecked] = useState([]);
  const [total, setTotal] = useState(0);

  const changeButton = (id) => {
    if (listChecked.includes(id)) {
      let newList = listChecked.filter((data) => data !== id);
      setListChecked(newList);
    } else {
      setListChecked([...listChecked, id]);
    }
  };

  const addQuantity = (index) => {
    let newList = [...listTotal];
    if (newList[index].total < 99) {
      newList[index].total += 1;
      setListTotal(newList);
      setTotal(total + 1);
    }
  };
  const removeQuantity = (index) => {
    let newList = [...listTotal];
    if (newList[index].total >= 1) {
      newList[index].total -= 1;
      setListTotal(newList);
      setTotal(total - 1);
    }
  };

  useEffect(() => {
    if (dataItem === null) {
      dispatch(
        CustomerAction.getListItemCustomer({
          categoryId: categoryId,
        })
      );
    }
  }, [dataItem]);

  useEffect(() => {
    if (dataItem) {
      setDataShow(dataItem);
      let newData = [];
      dataItem.forEach((data) =>
        newData.push({
          id: data.id,
          name: data.name,
          price: data.price,
          currency_unit: data.currency_unit,
          itemId: data.itemId,
          total: 0,
          check: false,
        })
      );
      setListTotal(newData);
    }
  }, [dataItem]);

  return (
    <CustomerLayout number={total}>
      <Box className={classes.boxHeader}>Món ăn</Box>
      <Box className={classes.boxPara}>
        {dataShow &&
          dataShow.map((data, index) => (
            <Box key={"items" + index} className={classes.boxBorder}>
              <IconButton onClick={(e) => changeButton(data.id)}>
                <CheckCircle
                  style={{
                    color: listChecked.includes(data.id)
                      ? "rgb(48, 92, 139)"
                      : "#bdbdbd",
                  }}
                />
              </IconButton>
              <Box className={classes.boxContent}>
                <Box className={classes.boxTop}>
                  <Box className={classes.boxDataName}>{data.name}</Box>
                </Box>
                <Box className={classes.boxBottom}>
                  <Box className={classes.boxDataTotal}>
                    {data.price + " " + data.currency_unit}
                  </Box>
                  <Box
                    style={{
                      display: listChecked.includes(data.id) ? "flex" : "none",
                    }}
                  >
                    <IconButton
                      classes={{
                        root: classes.boxIconButton,
                        label: classes.boxIconLabel,
                      }}
                      onClick={(e) => removeQuantity(index)}
                    >
                      <RemoveCircle
                        style={{
                          width: 40,
                          height: 40,
                        }}
                      />
                    </IconButton>
                    <Box className={classes.boxDataNumber}>
                      {listTotal[index].total}
                    </Box>
                    <IconButton
                      classes={{
                        root: classes.boxIconButton,
                        label: classes.boxIconLabel,
                      }}
                      onClick={(e) => addQuantity(index)}
                    >
                      <AddCircle style={{ width: 40, height: 40 }} />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        <Box className={classes.boxFooter}>
          <PopupListItems
            categoryId={categoryId}
            total={total}
            listTotal={listTotal}
            listChecked={listChecked}
          />
        </Box>
      </Box>
    </CustomerLayout>
  );
};

const useStyles = makeStyles({
  boxHeader: {
    width: "100%",
    height: "40px",
    backgroundColor: "#F2F3F5",
    lineHeight: "40px",
    paddingLeft: "4%",
    fontSize: "18px",
  },
  boxPara: {
    width: "92%",
    margin: "0 auto",
  },
  boxBorder: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    borderBottom: "1px solid rgb(0 0 0 / 0.1)",
  },
  boxContent: {
    padding: "10px 0px",
    width: "calc(100% - 50px)",
    display: "flex",
    flexWrap: "wrap",
  },
  boxTop: {
    width: "100%",
    padding: "0px 0px 5px 5px",
  },
  boxMiddle: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  boxBottom: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  boxDataName: {
    width: "100%",
    overflow: "auto",
    fontWeight: "500",
    fontSize: "18px",
  },
  boxDataDesc: {
    minWidth: "20px",
    boxSizing: "border-box",
    height: "20px",
    textAlign: "center",
    lineHeight: "19px",
    padding: "0px 5px",
    margin: "5px 0px",
  },
  boxDataTotal: {
    minWidth: "20px",
    boxSizing: "border-box",
    height: 40,
    fontWeight: 600,
    textAlign: "center",
    lineHeight: "19px",
    padding: "10px 5px",
    margin: 0,
  },
  boxDataNumber: {
    minWidth: 40,
    boxSizing: "border-box",
    height: 40,
    fontWeight: 600,
    fontSize: 24,
    textAlign: "center",
    lineHeight: "19px",
    padding: "10px 0px",
    margin: 0,
  },
  boxIconButton: {
    padding: 0,
  },
  boxIconLabel: {
    color: "#bdbdbd",
  },
  boxFooter: {
    width: "100%",
    height: "60px",
    backgroundColor: "rgb(48, 92, 139)",
    position: "fixed",
    bottom: "0",
    left: "0",
    color: "white",
  },
});

export default memo(OrderItems);
