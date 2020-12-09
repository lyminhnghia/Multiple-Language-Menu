import React, { memo, useState } from "react";
import { makeStyles, Box } from "@material-ui/core";
import { Check } from "@material-ui/icons";
import { AppConstant } from "../../../const";
import { CustomerLayout } from "../../../layouts";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Cookie from "js-cookie";

const ConfirmPay = (props) => {
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

  return (
    <CustomerLayout>
      <Box className={classes.boxBorder}>
        <Box className={classes.boxHeader}>Confirm pay</Box>
        <Box className={classes.boxBody}>
          {listTotal.map((data, index) => (
            <Box className={classes.boxContent} key={"b" + index}>
              <Box className={classes.boxDataName}>{data.name}</Box>
              <Box className={classes.boxDataTotal}>{data.total}</Box>
              <Box className={classes.boxDataPrice}>
                {data.price + " " + data.currency_unit}
              </Box>
            </Box>
          ))}
        </Box>
        <Box className={classes.boxFooter}>
          <Box
            className={classes.boxDataName}
            style={{ fontWeight: "600", fontSize: "16px" }}
          >
            Tổng
          </Box>
          <Box className={classes.boxDataTotal} style={{ border: "none" }}>
            {total}
          </Box>
          <Box className={classes.boxDataPrice}>{amount + " VND"}</Box>
          <Box className={classes.boxButton}>
            <Link
              className={classes.boxLink}
              to={{
                pathname: `/${Cookie.get(
                  AppConstant.KEY_RESTAURANT
                )}/order-history`,
                data: {
                  total: total,
                  amount: amount,
                  listTotal: listTotal,
                  listChecked: listChecked,
                },
              }}
            >
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "#42a5f5",
                  color: "white",
                }}
              >
                <Check style={{ marginRight: 20, marginTop: 10 }} />
                <Box>Hoàn thành</Box>
              </Box>
            </Link>
          </Box>
        </Box>
      </Box>
    </CustomerLayout>
  );
};

const useStyles = makeStyles({
  boxBorder: {
    width: "100%",
    height: "100%",
  },
  boxHeader: {
    width: "100%",
    height: "40px",
    backgroundColor: "#F2F3F5",
    lineHeight: "40px",
    paddingLeft: "20px",
    fontSize: "18px",
  },
  boxBody: {
    margin: "0 auto",
    width: "92%",
    height: "400px",
    overflow: "auto",
  },
  boxContent: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    minHeight: "50px",
    borderBottom: "1px solid rgb(0 0 0 / 0.1)",
  },
  boxDataName: {
    width: "calc(100% - 120px)",
    overflow: "auto",
  },
  boxDataTotal: {
    width: "20px",
    border: "1px solid rgb(0 0 0 / 0.1)",
    boxSizing: "border-box",
    height: "20px",
    textAlign: "center",
    lineHeight: "19px",
    fontWeight: "600",
  },
  boxDataPrice: {
    width: "100px",
    textAlign: "end",
    fontWeight: "600",
  },
  boxFooter: {
    width: "100%",
    // height: "50px",
    backgroundColor: "#F2F3F5",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    // padding: "0px 4%",
    position: "fixed",
    bottom: "0",
    paddingTop: "10px",
  },
  boxButton: {
    width: "100%",
    height: "45px",
    marginTop: "10px",
    "& .MuiButton-text": {
      borderRadius: "2px",
    },
  },
  inputTable: {
    width: 50,
    border: "none",
    "&:focus": {
      outline: "none !important",
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

export default memo(ConfirmPay);
