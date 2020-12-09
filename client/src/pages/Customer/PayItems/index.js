import React, { memo, useState } from "react";
import { makeStyles, IconButton, Box } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { AddCircle, RemoveCircle } from "@material-ui/icons";
import { AppConstant } from "../../../const";
import { CustomerLayout } from "../../../layouts";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";

const PayItems = (props) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const dataProps =
    props.location.data && props.location.data.listTotal
      ? props.location.data
      : { listTotal: [], listChecked: [], total: 0, amount: 0 };

  const [listTotal, setListTotal] = useState(dataProps.listTotal);
  const [listChecked, setListChecked] = useState(dataProps.listChecked);
  const [total, setTotal] = useState(dataProps.total);
  const [amount, setAmount] = useState(dataProps.amount);
  const [table, setTable] = useState("");

  const addQuantity = (index) => {
    let newList = [...listTotal];
    if (newList[index].total < 99) {
      newList[index].total += 1;
      setListTotal(newList);
      setTotal(total + 1);
      setAmount(amount + newList[index].price);
    }
  };
  const removeQuantity = (index) => {
    let newList = [...listTotal];
    if (newList[index].total > 1) {
      newList[index].total -= 1;
      setListTotal(newList);
      setTotal(total - 1);
      setAmount(amount - newList[index].price);
    }
  };

  const onSubmit = () => {
    console.log();
  };

  return (
    <CustomerLayout number={total}>
      <Box className={classes.boxBorder}>
        <Box className={classes.boxHeader}>
          <Box>Giỏ hàng</Box>
        </Box>
        <Box className={classes.boxBody}>
          {listTotal.map((data, index) => (
            <Box className={classes.boxContent} key={"b" + index}>
              <Box className={classes.boxLeft}>
                <Box className={classes.boxDataName}>{data.name}</Box>
                <Box className={classes.boxDataPrice}>
                  {data.price + " " + data.currency_unit}
                </Box>
              </Box>
              <Box className={classes.boxRight}>
                <IconButton
                  className={classes.boxIconButton}
                  onClick={(e) => addQuantity(index)}
                >
                  <AddCircle />
                </IconButton>
                <Box className={classes.boxDataCount}>{data.total}</Box>
                <IconButton
                  className={classes.boxIconButton}
                  onClick={(e) => removeQuantity(index)}
                >
                  <RemoveCircle />
                </IconButton>
              </Box>
            </Box>
          ))}
        </Box>
        <Box className={classes.boxFooter}>
          <Box className={classes.boxFooterTitl}>
            <Box style={{ fontWeight: "500" }}>Bàn</Box>
            <input
              className={classes.inputTable}
              name="tables"
              onChange={(e) => setTable(e.target.value)}
            />
          </Box>
          <Box className={classes.boxFooterTitl}>
            <Box style={{ fontWeight: "500" }}>Tổng</Box>
            <Box className={classes.boxDataTotal}>{total}</Box>
            <Box className={classes.boxDataPrice}>{amount + " VND"}</Box>
          </Box>
          <Box className={classes.boxButton}>
            <Link
              className={classes.boxLink}
              to={{
                pathname: `/${Cookie.get(
                  AppConstant.KEY_RESTAURANT
                )}/confirm-pay`,
                data: {
                  total: total,
                  amount: amount,
                  listTotal: listTotal,
                  listChecked: listChecked,
                },
              }}
              onClick={() => onsubmit()}
            >
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "rgb(48, 92, 139)",
                }}
              >
                <Box>Đặt hàng</Box>
              </Box>
            </Link>
          </Box>
        </Box>
      </Box>
    </CustomerLayout>
  );
};

const useStyles = makeStyles({
  iconButton: {
    padding: "9px",
    color: "#305C8B",
  },
  boxBorder: {
    width: "100%",
    backgroundColor: "#ffffff",
    color: "#000000",
  },
  boxHeader: {
    width: "100%",
    height: "50px",
    backgroundColor: "#F2F3F5",
    lineHeight: "50px",
    fontSize: "18px",
    display: "flex",
    justifyContent: "space-between",
    padding: "0px 8px",
    "& .MuiButtonBase-root": {
      margin: "7px 0px",
      backgroundColor: "rgb(0 0 0 / 0.2)",
      color: "white",
      width: "35px",
      height: "35px",
    },
  },
  boxBody: {
    width: "100%",
    height: "400px",
    overflow: "auto",
    paddingBottom: "65px",
  },
  boxContent: {
    width: "92%",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    minHeight: "50px",
    margin: "0 auto",
    marginTop: "7px",
    marginBottom: "7px",
    borderBottom: "1px solid rgb(0 0 0 / 0.1)",
  },
  boxLeft: {
    width: "65%",
    padding: "0px 0px 10px 10px",
  },
  boxRight: {
    width: "35%",
    display: "flex",
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
    margin: "0px 0px",
  },
  boxDataCount: {
    minWidth: "20px",
    boxSizing: "border-box",
    height: "34px",
    textAlign: "center",
    lineHeight: "19px",
    padding: "8px 5px",
    margin: "0",
  },
  boxFooter: {
    boxShadow: " 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 6px 0 rgba(0,0,0,.19)",
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    position: "fixed",
    backgroundColor: "#bdbdbd",
    bottom: "0",
    justifyContent: "space-around",
  },
  boxFooterTitl: {
    width: "100%",
    height: "25px",
    backgroundColor: "#bdbdbd",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    padding: "0px 20px",
    justifyContent: "space-between",
  },
  boxIconButton: {
    padding: "5px",
  },
  boxRemoveItem: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid rgb(0 0 0 / 0.2)",
    "& .MuiButtonBase-root": {
      padding: 0,
      borderRadius: "0px",
      backgroundColor: "#ff4d4d",
      color: "white",
    },
  },
  boxButton: {
    width: "calc(100% - 40px)",
    margin: "19px 20px",
    height: "45px",
    "& .MuiButton-text": {
      borderRadius: "2px",
    },
  },
  boxLink: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(48, 92, 139)",
    lineHeight: "45px",
    textAlign: "center",
    fontSize: "18px",
    color: "white",
    fontWeight: "500",
    textDecoration: "none",
  },
});
export default memo(PayItems);
