import React, { memo, useState } from "react";
import { LangConstant } from "../../../../const";
import {
  Button,
  makeStyles,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Box,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import InputText from "../../../../components/inputText";
import { useDispatch } from "react-redux";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import ButtonBox from "../../../../components/buttonBox";
const DialogIteam = ({
  id,
  nameCategory,
  descriptionCategory,
  priceCategory,
  srcCategory,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { t: getLabel } = useTranslation();
  const [formChange, setFormChange] = useState({
    id: id,
    name: nameCategory,
    description: descriptionCategory,
    price: priceCategory,
    src:
      "https://scontent-hkg4-1.xx.fbcdn.net/v/t1.0-9/122136486_1728914547265383_8975641410850883114_n.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_ohc=TPWQ6vrKkZoAX8g5ze0&_nc_ht=scontent-hkg4-1.xx&oh=ef07225c41df92e68e312b3766537a8d&oe=5FD01F14",
  });

  const onClickOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
    console.log("hihi");
  };

  const onChange = (e) => {
    setFormChange({ ...formChange, [e.target.name]: e.target.value });
  };
  const addQuantity = (index) => {};
  const removeQuantity = (index) => {};
  return (
    <Box className={classes.boxPara}>
      <Button className={classes.boxButtonS} onClick={onClickOpen}></Button>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={classes.dialogBox}
      >
        <form onSubmit={onSubmit}>
          <Box
            style={{ backgroundImage: `url(${formChange.src})` }}
            className={classes.dialogTitleBox}
          ></Box>
          <Box className={classes.dialogTitle}>
            <Box style={{ flexGrow: 10 }} className={classes.boxContent}>
              {formChange.name}
            </Box>
            <Box style={{ maxWidth: "65px" }} className={classes.boxContent}>
              {formChange.price}
            </Box>
          </Box>
          <DialogContent>
            <InputText
              nameLabel="Lưu ý đặc biệt"
              typeInput="text"
              requiredInput={false}
              nameText="name"
              // value={formChange.name}
              onInput={(e) => onChange(e)}
            />
            <Box className={classes.boxChoose}>
              <IconButton
                className={classes.boxIconButton}
                // onClick={e=>addQuantity(index)}
              >
                <AddCircleIcon />
              </IconButton>
              <Box className={classes.boxDataTotal}>1</Box>
              <IconButton
                className={classes.boxIconButton}
                // onClick={e=>removeQuantity(index)}
              >
                <RemoveCircleIcon />
              </IconButton>
            </Box>
          </DialogContent>
          <DialogActions>
            <Box className={classes.boxButton}>
              <ButtonBox
                nameButton={`Thêm vào giỏ hàng - ${formChange.price}`}
                onClick={onSubmit}
                typeButton={"submit"}
              ></ButtonBox>
            </Box>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
};
const useStyles = makeStyles({
  boxPara: {
    position: "absolute",
    width: "96%",
    height: "115px",
  },
  iconButton: {
    padding: "9px",
    color: "#305C8B",
  },
  dialogBox: {
    "& .MuiDialog-container .MuiDialog-paperWidthSm ": {
      width: "600px",
    },
  },
  dialogTitleBox: {
    color: "#000000",
    fontSize: "20px",
    width: "100%",
    minHeight: "200px",

    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  boxImg: {
    width: "100%",
    height: "auto",
  },
  dialogTitle: {
    width: "100%",
    padding: "20px",
    display: "flex",
    flexWrap: "wrap",
    borderBottom: "7px solid rgb(0 0 0 / 0.1)",
  },
  boxContent: {
    color: "black",
    fontSize: "18px",
    fontWeight: "500",
  },
  boxChoose: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  boxIconButton: {
    padding: "5px",
  },
  boxDataTotal: {
    minWidth: "30px",
    border: "1px solid rgb(0 0 0 / 0.1)",
    boxSizing: "border-box",
    height: "30px",
    textAlign: "center",
    lineHeight: "29px",
    padding: "0px 5px",
    margin: "13px 5px",
    color: "black",
    fontSize: "18px",
  },
  boxButton: {
    width: "100%",
    height: "50px",
    "& .MuiButtonBase-root": {
      borderRadius: "5px",
    },
  },
  boxButtonS: {
    width: "100%",
    height: "100%",
  },
});
export default memo(DialogIteam);
