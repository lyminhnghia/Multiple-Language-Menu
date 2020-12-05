import React, { memo } from "react";
import {Link} from "react-router-dom"
import {
    makeStyles,
    Box,
    Button
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import ButtonBox from "../../../../components/buttonBox"
const ListCategory = () => {
    const classes = useStyles();
    const { t: getLabel } = useTranslation();
    const categoris = [
        {
            id:"1",
            name: "Đồ uống",
            total: 2,
        },
        {
            id:"2",
            name: "Đồ ăn",
            total: 3,
        },
        {
            id:"3",
            name: "Đồ nhậu",
            total: 2,
        },
        {
            id:"4",
            name: "Đồ uống",
            total: 2,
        },
    ]
    return (
        <Box>
            <Box className={classes.boxHeader}>Category</Box>
            <Box className={classes.boxPara}>
                {
                    categoris.map((category,index)=>(
                        <Box key={"cate"+index} className={classes.boxBorder}>
                            <Box className={classes.boxContent}>
                                <Link to={`/{id}/categories/${category.id}`} activeClassName="active" style={{textDecoration: "none", color:"black"}}>
                                    <Box style={{fontSize:"18px",fontWeight: "500"}}>{category.name}</Box>
                                    <Box>{category.total}</Box>
                                </Link>
                            </Box>
                        </Box>
                    ))
                }               
            </Box>
        </Box>
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
    boxPara:{
        width: "92%",
        margin: "0 auto",
    },
    boxBorder:{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        borderBottom: "1px solid rgb(0 0 0 / 0.1)",
    },
    boxContent:{
        padding: "10px 0px",
        width: "100%",
    },
    // boxButton:{
    //     width: "100%",
    //     height: "100%",
    //     position: "absolute",
    //     top: "0"
    // }
});

export default memo(ListCategory);
