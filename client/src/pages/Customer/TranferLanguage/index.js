import React, { memo, useState } from "react";
import {
    makeStyles,
    Box,
    IconButton
} from "@material-ui/core";
import { CustomerLayout } from "../../../layouts";
import { useTranslation } from "react-i18next";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ButtonBox from "../../../components/buttonBox"
const TranferLang = () => {
    const classes = useStyles();
    const { t: getLabel } = useTranslation();
    const [checked, setChecked] = useState();
    const languages = [
        {
            lang: "Vietnam",
            tranfer: "Việt nam",
        },
        {
            lang: "Vietnam1",
            tranfer: "Việt nam",
        },
        {
            lang: "Vietnam2",
            tranfer: "Việt nam",
        },
        {
            lang: "Vietnam3",
            tranfer: "Việt nam",
        },
        {
            lang: "Vietnam4",
            tranfer: "Việt nam",
        },
    ]
    const changeBbutton = (lang) =>{
        setChecked(lang)
    }
    return (
        <CustomerLayout>
            <Box className={classes.boxHeader}>Language</Box>
            <Box className={classes.boxPara}>
                {
                    languages.map((lang,index)=>(
                        <Box key={"lang"+index} className={classes.boxBorder}>
                            <IconButton
                                onClick={e=>changeBbutton(lang.lang)}
                                className={classes.menuButton}
                                value="hihi"
                            >
                                <CheckCircleIcon style={{color:lang.lang == checked ?"rgb(48, 92, 139)":""}}/>
                            </IconButton>
                            <Box className={classes.boxContent}>
                                <Box style={{fontSize:"18px",fontWeight: "500"}}>{lang.lang}</Box>
                                <Box>{lang.tranfer}</Box>
                            </Box>
                        </Box>
                    ))
                }               
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
    }
});

export default memo(TranferLang);
