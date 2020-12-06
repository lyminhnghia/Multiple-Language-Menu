import React, { memo, useState } from "react";
// import { LangConstant } from "../../../../const";
import { Button, makeStyles, IconButton, Box } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { AddCircle, RemoveCircle, Clear } from "@material-ui/icons";
import ButtonBox from "../../../components/buttonBox";
import { CustomerLayout } from "../../../layouts";
const PayItems = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { t: getLabel } = useTranslation();
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
    if (newList[index].total > 1) {
      newList[index].total -= 1;
      setChangeListItems(newList);
    }
  };
  const removeItem = (index) => {
    let newList = [...listItems];
    newList.splice(index, 1);
    setChangeListItems(newList);
  };
    return (
        <CustomerLayout>
            <Box className={classes.boxBorder}>
                <Box className={classes.boxHeader}>
                    <Box>Pay Pay</Box>
                </Box>
                <Box className={classes.boxBody}>
                    {listItems.map((data, index) => (
                    <Box className={classes.boxContent} key={"b" + index}>
                        {/* <Box className={classes.boxRemoveItem}>
                        <Box style={{ lineHeight: "25px", paddingLeft: "10px" }}>
                            {element.id}
                        </Box>
                        <IconButton onClick={(e) => removeItem(index)}>
                            <Clear />
                        </IconButton>
                        </Box> */}
                        <Box className={classes.boxLeft}>
                        <Box className={classes.boxDataName}>{data.name}</Box>
                        <Box className={classes.boxDataPrice}>
                            {data.price}
                        </Box>
                        </Box>
                        <Box className={classes.boxRight}>
                        <IconButton
                            className={classes.boxIconButton}
                            onClick={(e) => addQuantity(index)}
                        >
                            <AddCircle />
                        </IconButton>
                        <Box className={classes.boxDataTotal}>{data.total}</Box>
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
                    <Box style={{ fontWeight: "500" }}>{element.total}</Box>
                    <Box
                        className={classes.boxDataTotal}
                        style={{ border: "1px solid #ffffff" }}
                    >
                        {totalItems}
                    </Box>
                    <Box className={classes.boxDataPrice}>{totalPrice}</Box>
                    </Box>
                    <Box className={classes.boxButton}>
                        <ButtonBox nameButton="Đặt hàng" />
                    </Box>
                </Box>
            </Box>
        </CustomerLayout>
    );
};
const element = {
  id: "ID",
  total: "Tổng",
};
const data = [
  {
    name: "my tom",
    total: 2,
    price: 2000,
  },
  {
    name: "my cay",
    total: 1,
    price: 20000,
  },
  {
    name: "coca",
    total: 1,
    price: 2000000,
  },
];
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
        // margin: "0 auto",
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
        // boxShadow: " 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 6px 0 rgba(0,0,0,.19)",
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
        border: "1px solid rgb(0 0 0 / 0.1)",
        boxSizing: "border-box",
        height: "20px",
        textAlign: "center",
        lineHeight: "19px",
        padding: "0px 5px",
        margin: "13px 0px",
    },
    boxFooter: {
        boxShadow: " 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 6px 0 rgba(0,0,0,.19)",
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        position: "fixed",
        bottom: "0",
        justifyContent: "space-around",
    },
    boxFooterTitl: {
        width: "100%",
        height: "50px",
        backgroundColor: "#ffffff",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        padding: "0px 2%",
        justifyContent: "space-around",
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
});
export default memo(PayItems);
