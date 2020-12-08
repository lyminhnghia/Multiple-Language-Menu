import React, { memo, useState } from "react";
import { makeStyles, Box, IconButton } from "@material-ui/core";
import { CustomerLayout } from "../../../layouts";
import { useTranslation } from "react-i18next";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import PopupListItems from "./Components/popupListItems";

const OrderItems = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const [checked, setChecked] = useState();
  const changeBbutton = (name) => {
    setChecked(name);
  };
  const [listItems, setChangeListItems] = useState(data);
  let totalItems = 0;
  let totalPrice = 0;
  listItems.forEach((element) => {
    totalItems += element.total;
    totalPrice += element.price * element.total;
  });
  const addQuantity = (index) => {
    let newList = [...listItems];
    if (newList[index].total < 99) {
      newList[index].total += 1;
      setChangeListItems(newList);
    }
  };
  const removeQuantity = (index) => {
    let newList = [...listItems];
    if (newList[index].total >= 1) {
      newList[index].total -= 1;
      setChangeListItems(newList);
    }
  };
  return (
    <CustomerLayout>
      <Box className={classes.boxHeader}>Item</Box>
      <Box className={classes.boxPara}>
        {data.map((data, index) => (
          <Box key={"items" + index} className={classes.boxBorder}>
            <IconButton
              onClick={(e) => changeBbutton(data.name)}
              className={classes.menuButton}
            >
              <CheckCircleIcon
                style={{
                  color: data.name == checked ? "rgb(48, 92, 139)" : "",
                }}
              />
            </IconButton>
            <Box className={classes.boxContent}>
              <Box className={classes.boxTop}>
                <Box className={classes.boxDataName}>{data.name}</Box>
              </Box>
              <Box className={classes.boxBottom}>
                <Box className={classes.boxDataTotal}>{data.price}</Box>
                <Box
                  style={{ display: data.name == checked ? "flex" : "none" }}
                >
                  <IconButton
                    className={classes.boxIconButton}
                    onClick={(e) => removeQuantity(index)}
                  >
                    <RemoveCircleIcon />
                  </IconButton>
                  <Box className={classes.boxDataTotal}>{data.total}</Box>
                  <IconButton
                    className={classes.boxIconButton}
                    onClick={(e) => addQuantity(index)}
                  >
                    <AddCircleIcon />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
        <Box className={classes.boxFooter}>
          <PopupListItems />
        </Box>
      </Box>
    </CustomerLayout>
  );
};
const element = {
  id: "ID",
  total: "Tổng",
  price: "Giá",
};
const data = [
  {
    name: "my tom",
    total: 0,
    price: 2000,
  },
  {
    name: "my cay",
    total: 0,
    price: 20000,
  },
  {
    name: "coca",
    total: 0,
    price: 2000000,
  },
];
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
    padding: "0px 0px 10px 10px",
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
  boxDataTotal: {
    minWidth: "20px",
    boxSizing: "border-box",
    height: "20px",
    textAlign: "center",
    lineHeight: "19px",
    padding: "0px 5px",
    margin: "13px 0px",
  },
  boxIconButton: {
    padding: "5px",
  },
  boxFooter: {
    width: "100%",
    height: "50px",
    backgroundColor: "rgb(48, 92, 139)",
    position: "fixed",
    bottom: "0",
    left: "0",
    color: "white",
  },
});

export default memo(OrderItems);
