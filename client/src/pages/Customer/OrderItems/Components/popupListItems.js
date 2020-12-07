import React, { memo, useState } from "react";
import { LangConstant } from "../../../../const";
import { Button, makeStyles, Dialog, IconButton, Box } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { Clear } from "@material-ui/icons";
import ButtonBox from "../../../../components/buttonBox";
import {Link} from "react-router-dom"

const PopupListItems = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const { t: getLabel } = useTranslation();

    const onClickOpen = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    return (
        <Box style={{width: "100%", height:"100%"}}>
            <Button style={{width: "100%", height:"100%"}} onClick={onClickOpen}></Button>
            <Dialog
                open={open}
                onClose={onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className={classes.dialogBox}
            >
                <Box className={classes.boxBorder}>
                <Box className={classes.boxHeader}>
                    <Box>Order List1</Box>
                    <IconButton onClick={(e) => setOpen(false)}>
                    <Clear />
                    </IconButton>
                </Box>
                <Box className={classes.boxFooter}>
                <Link className={classes.boxLink} to={`/{id}/pay`} activeClassName="active">
                    Đặt hàng
                </Link> 
                </Box>
                </Box>
            </Dialog>
        </Box>
    );
};
const useStyles = makeStyles({
    iconButton: {
        padding: "9px",
        color: "#305C8B",
    },
    dialogBox: {
        "& .MuiDialog-container .MuiDialog-paperWidthSm ": {
        width: "600px",
        margin: "0px",
        },
    },
    boxBorder: {
        width: "100%",
        height: "133px",
        position: "fixed",
        bottom: "0",
        backgroundColor: "#ffffff",
        color: "#000000",
        left: "0",
        right: "0",
    },
    boxHeader: {
        width: "100%",
        height: "50px",
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
    boxFooter: {
        boxShadow: " 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 6px 0 rgba(0,0,0,.19)",
        width: "100%",
        height: "50px",
        display: "flex",
        flexWrap: "wrap",
        position: "fixed",
        bottom: "0",
        justifyContent: "space-around",
    },
    boxLink:{
        width: "100%",
        height: "100%",
        backgroundColor: "rgb(48, 92, 139)",
        lineHeight: "50px",
        textAlign: "center",
        fontSize: "18px",
        color: "white",
        fontWeight: "500",
        textDecoration: "none",
    }
});
export default memo(PopupListItems);
