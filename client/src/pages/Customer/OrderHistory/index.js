import React, {useState, memo } from "react"
import { LangConstant } from "../../../const";

import {
    makeStyles,
    Box,
    InputLabel,
    TextareaAutosize,
    Select,
    FormControl,
  } from "@material-ui/core";

import { useTranslation } from "react-i18next";
import InputText from "../../../components/inputText";
import ButtonBox from "../../../components/buttonBox";
const OrderHistory = () =>{
    const classes = useStyles();
    const { t: getLabel } = useTranslation();
    const listDate = ([
        { 
            name: "my tommmmmmmmmmm mmmmmmmmmmm mmmmmmmmmm mmmmmmmm mmmmmmmmmmmmmm mmmmmmmm mmmmmmmm",
            total: 2, 
            price: 2000
        },
        {
            name: "my cay",
            total: 1,
            price: 20000
        },
        {
            name: "coca",
            total: 10,
            price: 2000000
        }
    ])
    let totalItems = 0;
    let totalPrice = 0;
    const total = listDate.forEach(element => {
        totalItems += element.total
        totalPrice += element.price
    });
    return(
        <Box className={classes.boxBorder}>
            <Box className={classes.boxHeader}>Order history</Box>           
            <Box className={classes.boxBody}>
                {
                    listDate.map((data,index) =>(
                        <Box className={classes.boxContent} key={"b"+index}>
                            <Box className={classes.boxDataName} >{data.name}</Box>
                            <Box className={classes.boxDataTotal} >{data.total}</Box>
                            <Box className={classes.boxDataPrice} >{data.price}</Box>
                        </Box>
                    ))
                }
            </Box>
            <Box className={classes.boxFooter}>
                <Box className={classes.boxDataName} >{"total"}</Box>
                <Box className={classes.boxDataTotal} >{totalItems}</Box>
                <Box className={classes.boxDataPrice} >{totalPrice}</Box>
            </Box>
            
        </Box>
    )
}
const useStyles = makeStyles({
    boxBorder: {
        width: "100%",
        height:"100%",
    },
    boxHeader: {
        width: "100%",
        height: "50px",
        backgroundColor: "#F2F3F5",
        lineHeight: "50px",
        paddingLeft: "20px",
        fontSize: "18px",
    },
    boxBody: {
        margin: "0 auto",
        width: "96%",
        height: "400px",
        overflow: "auto"
    },
    boxContent: {
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        minHeight: "50px",
        borderBottom: "1px solid rgb(0 0 0 / 0.1)"
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
        lineHeight: "19px"
    },
    boxDataPrice: {
        width: "100px",
        textAlign: "end",
    },
    boxFooter: {
        width: "100%",
        height: "50px",
        backgroundColor: "#F2F3F5",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        padding: "0px 2%"
    }
});
export default memo(OrderHistory);