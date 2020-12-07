import React, { memo, useState, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import ImageAction from "../../../../redux/image.redux";
import ItemRestaurantAction from "../../../../redux/itemRestaurant.redux";
import { uuid } from "../../../../utils";

const PopupProduct = ({ data, categoryProduct }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t: getLabel } = useTranslation();

  const [open, setOpen] = useState(false);
  const [formChange, setFormChange] = useState({
    id: data.id,
    image: data.image_item,
    name: data.name,
    code: data.code,
    price: data.price,
    currency_unit: data.currency_unit,
    description: data.description,
    categoryId: data.categoryId,
  });

  const dataURL = useSelector((state) => state.imageRedux.dataURL);

  const onClickOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const onSubmit = () => {
    dispatch(ItemRestaurantAction.updateItem(formChange));
    onClose();
  };

  const onChange = (e) => {
    setFormChange({ ...formChange, [e.target.name]: e.target.value });
  };
  const onChooseFile = (data) => {
    dispatch(ImageAction.requestUploadPostImage(data));
  };

  useEffect(() => {
    if (dataURL) {
      setFormChange({ ...formChange, ["image"]: dataURL });
    }
  }, [dataURL]);

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
        <Box className={classes.dialogTitleBox}>
          {getLabel(LangConstant.TXT_EDIT_PRODUCT)}
        </Box>
        <DialogContent>
          <InputText
            nameLabel={getLabel(LangConstant.TXT_NAME_PRODUCT)}
            typeInput="text"
            requiredInput={true}
            nameText="name"
            value={formChange.name}
            onInput={(e) => onChange(e)}
          />
          <InputText
            nameLabel={getLabel(LangConstant.TXT_ID_PRODUCT)}
            typeInput="text"
            requiredInput={true}
            nameText="code"
            value={formChange.code}
            onInput={(e) => onChange(e)}
          />
          <InputText
            nameLabel={getLabel(LangConstant.TXT_PRICE_PRODUCT)}
            typeInput="number"
            requiredInput={true}
            nameText="price"
            value={formChange.price}
            onInput={(e) => onChange(e)}
          />
          <InputText
            nameLabel={getLabel(LangConstant.TXT_CURRENCY_UNIT)}
            typeInput="text"
            requiredInput={true}
            nameText="currency_unit"
            value={formChange.currency_unit}
            onInput={(e) => onChange(e)}
          />
          <Box className={classes.boxLabel}>
            {getLabel(LangConstant.TXT_DESCRIPTION_PRODUCT)}
          </Box>
          <TextareaAutosize
            style={{
              width: "100%",
              height: 56,
              fontSize: "14px",
              marginBottom: 20,
            }}
            aria-label="maximum height"
            placeholder={`${getLabel(LangConstant.TXT_DESCRIPTION_PRODUCT)}...`}
            value={formChange.description}
            name="description"
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
              label="category-product"
              onInput={(e) => onChange(e)}
              inputProps={{
                name: "categoryId",
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
          <AddImage onChooseFile={onChooseFile} src={formChange.image} />
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose} color="primary">
            {getLabel(LangConstant.TXT_CANCER)}
          </Button>
          <Button onClick={onSubmit} color="primary">
            {getLabel(LangConstant.TXT_SAVE)}
          </Button>
        </DialogActions>
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
