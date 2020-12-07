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
  InputLabel,
} from "@material-ui/core";
import { EditOutlined } from "@material-ui/icons";
import { InputText, AddImage } from "../../../../components";
import { useTranslation } from "react-i18next";
import { uuid } from "../../../../utils";

const PopupProduct = ({
  nameProduct,
  IDProduct,
  priceProduct,
  descriptionProduct,
  categoryProduct,
  imgProduct,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { t: getLabel } = useTranslation();
  const [formChange, setFormChange] = useState({});
  const onClickOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formChange);
  };

  const onChange = (e) => {
    setFormChange({ ...formChange, [e.target.name]: e.target.value });
    console.log(e.target.value, e.target.name);
  };
  const onChooseFile = (data) => {
    setFormChange({ ...formChange, ["image"]: data });
  };

  return (
    <Box>
      <IconButton
        className={classes.iconButton}
        aria-label="add"
        onClick={onClickOpen}
      >
        <EditOutlined />
      </IconButton>
      <Dialog open={open} onClose={onClose} className={classes.dialogBox}>
        <form onSubmit={onSubmit}>
          <Box className={classes.dialogTitleBox}>
            {getLabel(LangConstant.TXT_EDIT_PRODUCT)}
          </Box>

          <DialogContent>
            <InputText
              nameLabel={getLabel(LangConstant.TXT_NAME_PRODUCT)}
              typeInput="text"
              requiredInput={true}
              nameText="name-product"
              onInput={(e) => onChange(e)}
              defaultValueInput={nameProduct}
            />
            <InputText
              nameLabel={getLabel(LangConstant.TXT_ID_PRODUCT)}
              typeInput="text"
              requiredInput={true}
              nameText="id-product"
              onInput={(e) => onChange(e)}
              defaultValueInput={IDProduct}
            />
            <InputText
              nameLabel={getLabel(LangConstant.TXT_PRICE_PRODUCT)}
              typeInput="number"
              requiredInput={true}
              nameText="price-product"
              onInput={(e) => onChange(e)}
              defaultValueInput={priceProduct}
            />
            <Box className={classes.boxLabel}>
              {getLabel(LangConstant.TXT_DESCRIPTION_PRODUCT)}
            </Box>
            <TextareaAutosize
              style={{
                width: "100%",
                height: 56,
                fontSize: "14px",
                marginBottom: "15px",
              }}
              aria-label="maximum height"
              placeholder={`${getLabel(
                LangConstant.TXT_DESCRIPTION_PRODUCT
              )}...`}
              defaultValue={descriptionProduct}
              name="description-product"
              onChange={(e) => onChange(e)}
            />
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel
                className={classes.inputBox}
                htmlFor="outlined-age-native-simple"
              >
                {getLabel(LangConstant.TXT_CATEGORY_PRODUCT)}
              </InputLabel>
              <Select
                native
                value={formChange.categoryId ? formChange.categoryId : ""}
                // onChange={handleChange}
                label="category-product"
                onInput={(e) => onChange(e)}
                inputProps={{
                  name: "category-product",
                  id: "outlined-age-native-simple",
                }}
                className={classes.selectBox}
              >
                <option
                  className={classes.optionBox}
                  aria-label="None"
                  value=""
                />
                {categoryProduct &&
                  categoryProduct.map((data, index) => (
                    <option
                      className={classes.optionBox}
                      value={data.id}
                      key={uuid()}
                    >
                      {data.name}
                    </option>
                  ))}
              </Select>
            </FormControl>
            <Box className={classes.boxLabel}>
              {getLabel(LangConstant.TXT_ADD_IMAGE)}
            </Box>
            <AddImage onChooseFile={onChooseFile} src={imgProduct} />
          </DialogContent>

          <DialogActions>
            <Button onClick={onClose} color="primary">
              {getLabel(LangConstant.TXT_CANCER)}
            </Button>
            <Button onClick={onClose} type="submit" color="primary">
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
    "& .MuiDialog-container .MuiDialog-paperWidthSm ": {
      width: "600px",
    },
  },
  dialogTitleBox: {
    padding: "20px 0px 0px 20px",
    color: "rgb(48, 92, 139)",
    fontSize: 20,
    fontWeight: 500,
  },
  boxLabel: {
    fontSize: "18px",
    fontWeight: "500",
    marginBottom: "5px",
    marginTop: "15px",
    color: "rgb(48, 92, 139)",
  },
  formControl: {
    width: "100%",
  },
  optionBox: {
    color: "rgb(48, 92, 139)",
  },
  selectBox: {
    color: "#000000",
  },
  inputBox: {
    color: "rgb(48, 92, 139)",
  },
});
export default memo(PopupProduct);
