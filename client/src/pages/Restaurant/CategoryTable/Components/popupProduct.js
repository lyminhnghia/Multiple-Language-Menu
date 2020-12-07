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
  TextareaAutosize,
  FormControl,
  Select,
  InputLabel
} from "@material-ui/core";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { useTranslation } from "react-i18next";
import InputText from "../../../../components/inputText";
import AddImage from "../../../../components/AddImage"

const PopupProduct = ({nameProduct, IDProduct, priceProduct, descriptionProduct,categoryProduct, imgProduct}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { t: getLabel} = useTranslation();
  const [formChange, setFormChange] = useState({});
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false)
  };
  const handleSubmit = e => {
    e.preventDefault()
    console.log(formChange)
  }

  const onChange = e => {
    setFormChange({...formChange, [e.target.name]: e.target.value})
    console.log(e.target.value, e.target.name)
  }
  const getImgBase64 = (data) =>{
    setFormChange({...formChange, ["base-64"]: data})
  }
  return (
    <Box>
      <IconButton className={classes.iconButton} aria-label="add" onClick={handleClickOpen}>
        <EditOutlinedIcon/>
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={classes.dialogBox}
      >
        <form onSubmit={handleSubmit}>
          <Box className={classes.dialogTitleBox}>{getLabel(LangConstant.TXT_EDIT_PRODUCT)}</Box>

          <DialogContent>
            <InputText 
              nameLabel={getLabel(LangConstant.TXT_NAME_PRODUCT)}
              typeInput="text"
              requiredInput={true}
              nameText="name-product"
              onInput = {e => onChange(e)}
              defaultValueInput={nameProduct}
            />
            <InputText 
              nameLabel={getLabel(LangConstant.TXT_ID_PRODUCT)}
              typeInput="text"
              requiredInput={true}
              nameText="id-product"
              onInput = {e => onChange(e)}
              defaultValueInput={IDProduct}
            />
            <InputText 
              nameLabel={getLabel(LangConstant.TXT_PRICE_PRODUCT)}
              typeInput="number"
              requiredInput={true}
              nameText="price-product"
              onInput = {e => onChange(e)}
              defaultValueInput={priceProduct}
            />
            <Box className={classes.boxLabel}>
              {getLabel(LangConstant.TXT_DESCRIPTION_PRODUCT)}
            </Box>
            <TextareaAutosize
              style={{width:"100%",height: 56, fontSize:"14px", marginBottom: "15px"}}
              // rowsMax={10}
              aria-label="maximum height"
              placeholder={`${getLabel(LangConstant.TXT_DESCRIPTION_PRODUCT)}...`}
              defaultValue={descriptionProduct}
              name = "description-product"
              onChange = {e => onChange(e)}
            />
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel className={classes.inputBox} htmlFor="outlined-age-native-simple">{getLabel(LangConstant.TXT_CATEGORY_PRODUCT)}</InputLabel>
              <Select
                native
                // value={state.age}
                // onChange={handleChange}
                label="category-product"
                onInput = {e => onChange(e)}
                inputProps={{
                  name: 'category-product',
                  id: 'outlined-age-native-simple',
                }}
                className={classes.selectBox}
              >
                <option className={classes.optionBox} aria-label="None" value="" />
                <option className={classes.optionBox} value={10}>Ten</option>
                <option className={classes.optionBox} value={20}>Twenty</option>
                <option className={classes.optionBox} value={30}>Thirty</option>
              </Select>
            </FormControl> 
            <Box className={classes.boxLabel}>
              {getLabel(LangConstant.TXT_ADD_IMAGE)}
            </Box>
            <AddImage getData = {getImgBase64} src= {imgProduct}/>
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose} color="primary">
              {getLabel(LangConstant.TXT_CANCER)}
            </Button>
            <Button onClick={handleClose} type="submit" color="primary">
              {getLabel(LangConstant.TXT_SAVE)}
            </Button>
          </DialogActions>

        </form>
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
    "& .MuiDialog-container .MuiDialog-paperWidthSm " :{
      width: "600px"
    }   
  },
  dialogTitleBox: {
    color: "#000000",
    padding: "20px 0px 0px 20px",
    fontSize: "20px",
  },
  boxLabel: {
    fontSize: "18px",
    fontWeight: "500",
    marginBottom: "5px",
    marginTop: "15px",
    color: "rgb(48, 92, 139)"
  },
  formControl: {
    width: "100%"
  },
  optionBox: {
    color: "rgb(48, 92, 139)"
  },
  selectBox: {
    color: "#000000"
  },
  inputBox: {
    color: "rgb(48, 92, 139)"
  },
});
export default memo(PopupProduct);