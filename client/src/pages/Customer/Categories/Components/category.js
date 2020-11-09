import React, {useState, memo } from "react"
import {
    makeStyles,
    Box,
  } from "@material-ui/core";

import { useTranslation } from "react-i18next";
// import InputText from "../../../components/inputText";
// import ButtonBox from "../../../components/buttonBox";

const CategoryBox = ({idItem,name,categories}) =>{
    const classes = useStyles();
    const { t: getLabel } = useTranslation();
    const [listItems, setChangeListItems] = useState(categories)
    return(
            <Box id={idItem} className={classes.boxBorder}>
                <Box className={classes.boxHeader}>
                    {name}
                </Box>
                <Box className={classes.boxBody}>
                        {
                            listItems.map((category,index)=>(
                                <Box key = {"category"+index} className={classes.boxChild}>
                                    <Box style={{flexGrow: 1}}>
                                        <img className={classes.boxImg}/>
                                    </Box>                                  
                                    <Box style={{flexGrow: 10}}>{category.name}</Box>
                                    <Box style={{maxWidth: "65px", fontWeight: 600}}>{category.price}</Box>
                                </Box>
                            ))
                        }
                </Box>
            </Box>       
    )
}

const useStyles = makeStyles({
    boxBorder: {
        width: "100%",
        backgroundColor: "#ffffff",
        marginTop: "10px"
    },
    boxHeader: {
        width: "100%",
        fontSize: "20px",
        fontWeight: "600",
        color: "rgb(0 0 0 / 0.6)",
        padding: "20px 10px 0px",
    },
    boxChild: {
        width: "96%",
        display: "flex",
        margin: "0 auto",
        paddingTop: "15px",
        paddingBottom: "15px",
        borderBottom: "1px solid rgb(0 0 0 / 0.1)",
        "&:last-child": {
            border: "none"
        }
    },
    boxBody: {
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
    },
    boxImg: {
        width: "100px",
        height: "100px",
        
    }
});
export default memo(CategoryBox);