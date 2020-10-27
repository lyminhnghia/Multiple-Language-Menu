import React, { memo, useState } from "react";
import { ShopLayout } from "../../../layouts";
import { LangConstant } from "../../../const";
import {
  makeStyles,
  Box,
//   InputLabel,
//   TextareaAutosize,
//   Select,
//   FormControl,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
// import InputText from "../../../components/inputText";
import ButtonBox from "../../../components/buttonBox";
// import PopupBox from "./Components/popup";
// import AddImage from "../../../components/AddImage";
const QRcodeShop = () => {
    const classes = useStyles();
    const { t: getLabel } = useTranslation();
    const [changeSize, setChangeSize] = useState({
        buttonSmall: false,
        buttonMiddle: true,
        buttonLarge: false,
    });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formChange);
//   };

//   const onChange = (e) => {
//     setFormChange({ ...formChange, [e.target.name]: e.target.value });
//     console.log(e.target.value, e.target.name);
//   };
//   const getImgBase64 = (data) => {
//     setFormChange({ ...formChange, ["base-64"]: data });
//   };
    const onChange = (e) =>{
        if(e === "1"){
            setChangeSize({
                buttonSmall: true,
                buttonMiddle: false,
                buttonLarge: false,
            })
        }else if(e === "2"){
            setChangeSize({
                buttonSmall: false,
                buttonMiddle: true,
                buttonLarge: false,
            })
        }else if(e === "3"){
            setChangeSize({
                buttonSmall: false,
                buttonMiddle: false,
                buttonLarge: true,
            })
        }
    }
    return (
        <ShopLayout>
            <Box className={classes.boxParent}>
                <Box>

                </Box>
                <Box className={classes.boxBody}>
                    <Box className={classes.boxP}>Please download QR code as image</Box>
                    <Box className={classes.boxImg}>
                        <img style={{display:changeSize.buttonSmall?"block":"none", width:"200px",height:"200px" }} />
                        <img style={{display:changeSize.buttonMiddle?"block":"none", width:"300px",height:"300px" }} />
                        <img style={{display:changeSize.buttonLarge?"block":"none", width:"400px",height:"400px" }} />
                    </Box>               
                    <Box className={classes.boxPButton}>
                        <Box className={`${classes.boxButton} ${changeSize.buttonSmall?classes.boxChange:""}`}>
                            <ButtonBox nameButton={getLabel(LangConstant.TXT_SMALL)} onClick={e=>onChange("1")}></ButtonBox>
                        </Box>
                        <Box className={`${classes.boxButton} ${changeSize.buttonMiddle?classes.boxChange:""}`}>
                            <ButtonBox nameButton={getLabel(LangConstant.TXT_MIDDLE)} onClick={e=>onChange("2")}></ButtonBox>
                        </Box>
                        <Box className={`${classes.boxButton} ${changeSize.buttonLarge?classes.boxChange:""}`}>
                            <ButtonBox nameButton={getLabel(LangConstant.TXT_LARGE)} onClick={e=>onChange("3")}></ButtonBox>
                        </Box>
                    </Box>
                    <Box className={classes.boxButton1}>
                        <ButtonBox
                            nameButton={getLabel(LangConstant.TXT_DOWNLOAD)}
                        />
                    </Box>
                </Box>
            </Box>
        </ShopLayout>
    );
};

const useStyles = makeStyles({
    boxParent: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F2F3F5",
    },
    boxBody: {
        width: "800px"
    },
    boxPButton: {
        display: "flex",
        justifyContent: "center"
    },
    boxButton: {
        height: "40px",
        height: "40px",
        width: "100px",
        margin: "5px",   
    },
    boxImg: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "410px"
    },
    boxChange: {
        "& .MuiButtonBase-root": {
            backgroundColor: "#1a334d"
        }
    },
    boxP: {
        textAlign: "center",
        fontSize: "18px"
    },
    boxButton1: {
        width: "140px",
        margin: "0 auto",
        height: "40px",
        marginTop: "20px",
      },
});

export default memo(QRcodeShop);
