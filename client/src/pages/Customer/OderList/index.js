import React, {useState, memo } from "react"
import { LangConstant } from "../../../const";

import {
    makeStyles,
    Box,
    IconButton 
  } from "@material-ui/core";

import { useTranslation } from "react-i18next";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import ClearIcon from '@material-ui/icons/Clear';
// import InputText from "../../../components/inputText";
// import ButtonBox from "../../../components/buttonBox";

const OrderList = () =>{
    const classes = useStyles();
    const { t: getLabel } = useTranslation();
    const [listItems, setChangeListItems] = useState(data)
    let totalItems = 0;
    let totalPrice = 0;
    listItems.forEach(element => {
        totalItems += element.total
        totalPrice += element.price * element.total
    });
    const addQuantity = (index) =>{
        let newList = [...listItems]
        if(newList[index].total < 99){
            newList[index].total += 1
            setChangeListItems(newList);
        }
        
    }
    const removeQuantity = (index) =>{
        let newList = [...listItems]
        if(newList[index].total > 1){
            newList[index].total -= 1
            setChangeListItems(newList);
        }      
    }
    const removeItem = (index) =>{
        let newList = [...listItems]
            newList.splice(index, 1)
            setChangeListItems(newList); 
    }

    return(
        <Box className={classes.boxBorder}>
            <Box className={classes.boxHeader}>Order List</Box>           
            <Box className={classes.boxBody}>
                {
                    listItems.map((data,index) =>(
                        <Box className={classes.boxContent} key={"b"+index}>
                            <Box className={classes.boxRemoveItem}>
                                <Box style={{lineHeight: "25px",paddingLeft: "10px"}}>{element.id}</Box>
                                <IconButton 
                                    // className={classes.boxIconButton}
                                    onClick={e=>removeItem(index)}
                                >
                                    <ClearIcon/>
                                </IconButton>
                            </Box>                          
                            <Box className={classes.boxLeft}>
                                <Box className={classes.boxDataName} >{data.name}</Box>
                                <Box className={classes.boxDataPrice} >{element.price}: {data.price}</Box>                               
                            </Box>
                            <Box className={classes.boxRight}>
                                <IconButton 
                                    className={classes.boxIconButton}
                                    onClick={e=>addQuantity(index)}
                                >
                                    <AddCircleIcon/>
                                </IconButton>                           
                                <Box className={classes.boxDataTotal} >{data.total}</Box>
                                <IconButton
                                    className={classes.boxIconButton}
                                    onClick={e=>removeQuantity(index)}
                                >
                                    <RemoveCircleIcon/>
                                </IconButton>
                            </Box>
                        </Box>
                    ))
                }
            </Box>
            <Box className={classes.boxFooter}>
                <Box style={{fontWeight: "500"}} >{element.total}</Box>
                <Box className={classes.boxDataTotal} >{totalItems}</Box>
                <Box className={classes.boxDataPrice} >{totalPrice}</Box>
            </Box>          
        </Box>
    )
}
const element = {
    id: "ID",
    total: "Tổng",
    price: "Giá"
}
const data = [
    { 
        name: "my tom mmmmmmmmmm mmmmmmmmmmmmmm mmmmmmmmm mmmmmmmmmm mmmmmmmmmmmm mmmmmmmmm",
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
        total: 99,
        price: 2000000
    }
]

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
        // margin: "0 auto",
        width: "100%",
        height: "400px",
        overflow: "auto"
    },
    boxContent: {
        width: "96%",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        minHeight: "50px",
        margin: "0 auto",
        marginTop: "7px",
        marginBottom: "7px",
        // borderBottom: "1px solid rgb(0 0 0 / 0.1)",
        boxShadow:" 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 6px 0 rgba(0,0,0,.19)",
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
    boxDataPrice: {
        // width: "100px",
        // textAlign: "end",
    },
    boxFooter: {
        width: "100%",
        height: "50px",
        backgroundColor: "#F2F3F5",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        padding: "0px 2%",
        position: "fixed",
        bottom: "0",
        justifyContent: "space-around"
    },
    boxIconButton: {
        padding: "5px",
    },
    boxRemoveItem: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid rgb(0 0 0 / 0.2)",
        "& .MuiButtonBase-root" :{
            padding: 0,
            // marginTop: "5px",
            borderRadius: "0px",
            backgroundColor: "#ff4d4d",
            color: "white",
        }
    },
});
export default memo(OrderList);