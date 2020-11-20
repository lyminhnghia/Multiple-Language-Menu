import React, { memo, useState, useEffect } from "react";
import { LangConstant } from "../../../const";
import { makeStyles, Box } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import LabelText from "./Components/labelText"

const Introduce = () => {
    const classes = useStyles();
    const { t: getLabel } = useTranslation();

    return (
        <Box className={classes.boxParent}>
            <Box className={classes.boxHeader}>
                <Box className={classes.boxName}>
                    MENUU
                </Box>
            </Box>
            <Box className={classes.boxBody}>
                {
                    data.map(Data =>(
                        <Box className={classes.boxChild}>
                            <Box className={classes.boxQrcode}>
                                <Box className={classes.boxQr} style={{backgroundImage: `url(${Data.src})`}}>

                                </Box>
                            </Box>
                            <Box className={classes.boxContent}>
                                <LabelText nameLabel="Tên cửa hàng" nameText= {Data.name}/>
                                <LabelText nameLabel="Loại cửa hàng" nameText= {Data.description}/>
                                <LabelText nameLabel="Số điện thoại" nameText= {Data.number}/>
                                <LabelText nameLabel="Địa chỉ" nameText= {Data.address}/>
                            </Box>
                        </Box>
                    ))
                }
            </Box>
        </Box>
    );
};

const data = [
    { 
        id: "id",
        name: "nameCategory",
        description: "descriptionCategory",
        number: "453456456",
        address: "e3 Đại học công nghệ",
        src: "https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-9/20915161_840158542807659_2727648821536183204_n.jpg?_nc_cat=105&ccb=2&_nc_sid=a4a2d7&_nc_ohc=6HS9dxLoGAcAX8i6Z6d&_nc_ht=scontent.fhan4-1.fna&oh=1ea4d7872a8d2f46de23706a5f0951d3&oe=5FD58EA5",
    },
    {
        id: "id",
        name: "nameCategory",
        description: "descriptionCategory",
        number: "456456456",
        address: "e3 Đại học công nghệ",
        src: "https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-9/20915161_840158542807659_2727648821536183204_n.jpg?_nc_cat=105&ccb=2&_nc_sid=a4a2d7&_nc_ohc=6HS9dxLoGAcAX8i6Z6d&_nc_ht=scontent.fhan4-1.fna&oh=1ea4d7872a8d2f46de23706a5f0951d3&oe=5FD58EA5",
    },
    {
        id: "id",
        name: "nameCategory",
        description: "descriptionCategory",
        number: "78978943",
        address: "e3 Đại học công nghệ",
        src: "https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-9/20915161_840158542807659_2727648821536183204_n.jpg?_nc_cat=105&ccb=2&_nc_sid=a4a2d7&_nc_ohc=6HS9dxLoGAcAX8i6Z6d&_nc_ht=scontent.fhan4-1.fna&oh=1ea4d7872a8d2f46de23706a5f0951d3&oe=5FD58EA5",
    }
]

const useStyles = makeStyles({
    boxParent: {
        width: "100vw",
        height: "100vh",
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
    },
    boxHeader: {
        width: "100%",
        height: "350px",
        backgroundColor: "rgb(48, 92, 139)"
    },
    boxBody: {
        width: "1000px",
        margin: "0 auto",
        marginTop: "-100px",
        backgroundColor: "#ffffff",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        paddingTop: "10px",
        display: "flex",
        flexWrap: "wrap",
        boxShadow: "0 1px 3px 0 rgba(0,0,0,.2), 0 1px 6px 0 rgba(0,0,0,.19)",
    },
    boxChild:{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        margin: "10px 20px 0px 20px",
        paddingBottom: "20px",
        borderBottom: "1px solid rgb(0 0 0 / 0.1)",
    },
    boxName: {
        color: "#ffffff",
        fontSize: "60px",
        fontWeight: "600",
        textAlign: "center",
        marginTop: "90px",
    },
    boxQrcode: {
        width: "200px",
    },
    boxContent: {
        width: "calc(100% - 200px)",
        padding: "0px 0px 20px 20px",
    },
    boxQr: {
        width: "200px",
        height: "200px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        margin: "0 auto",
    },
    
});

export default memo(Introduce);
