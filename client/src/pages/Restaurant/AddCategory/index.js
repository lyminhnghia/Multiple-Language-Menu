import React, { memo, useState, useEffect } from "react";
import { RestaurantLayout } from "../../../layouts";
import { LangConstant } from "../../../const";
import {
  makeStyles,
  Box,
  InputLabel,
  TextareaAutosize,
  Select,
  FormControl,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import InputText from "../../../components/inputText";
import ButtonBox from "../../../components/buttonBox";
import PopupBox from "./Components/popup";
import AddImage from "../../../components/AddImage";
import { useDispatch, useSelector } from "react-redux";
import CategoryRestaurantAction from "../../../redux/categoryRestaurant.redux";
import ItemRestaurantAction from "../../../redux/itemRestaurant.redux";
import ImageAction from "../../../redux/image.redux";
import { uuid } from "../../../utils";

const RestaurantAddCategory = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const dispatch = useDispatch();

  const [formChange, setFormChange] = useState({});
  const [category, setCategory] = useState([]);
  const listCategory = useSelector(
    (state) => state.categoryRestaurantRedux.listCategory
  );
  const isCreateSuccess = useSelector(
    (state) => state.categoryRestaurantRedux.isCreateSuccess
  );

  const dataURL = useSelector((state) => state.imageRedux.dataURL);

  if (listCategory === null) {
    dispatch(CategoryRestaurantAction.getListCategory({}));
  }

  const onSubmit = () => {
    dispatch(ItemRestaurantAction.createItem(formChange));
  };

  const onChange = (e) => {
    setFormChange({ ...formChange, [e.target.name]: e.target.value });
  };

  const onGetImage = (data) => {
    dispatch(ImageAction.requestUploadPostImage(data));
  };

  useEffect(() => {
    if (listCategory) {
      setCategory(listCategory);
    }
  }, [listCategory]);

  useEffect(() => {
    if (isCreateSuccess) {
      dispatch(CategoryRestaurantAction.resetCategory());
      dispatch(CategoryRestaurantAction.getListCategory({}));
    }
  }, [isCreateSuccess]);

  useEffect(() => {
    if (dataURL) {
      setFormChange({ ...formChange, ["image"]: dataURL });
    }
  }, [dataURL]);

  return (
    <RestaurantLayout>
      <Box className={classes.boxParent}>
        <Box className={classes.boxBorder}>
          <form style={{ width: "100%" }}>
            <Box className={classes.BoxChild}>
              <InputText
                nameLabel={getLabel(LangConstant.TXT_NAME_PRODUCT)}
                typeInput="text"
                requiredInput={true}
                nameText="name"
                onInput={(e) => onChange(e)}
              />
            </Box>
            <Box className={classes.BoxChild}>
              <InputText
                nameLabel={getLabel(LangConstant.TXT_ID_PRODUCT)}
                typeInput="text"
                requiredInput={true}
                nameText="code"
                onInput={(e) => onChange(e)}
              />
            </Box>
            <Box className={classes.BoxChild}>
              <InputText
                nameLabel={getLabel(LangConstant.TXT_PRICE_PRODUCT)}
                typeInput="number"
                requiredInput={true}
                nameText="price"
                onInput={(e) => onChange(e)}
              />
            </Box>
            <Box className={classes.BoxChild}>
              <InputText
                nameLabel={getLabel(LangConstant.TXT_CURRENCY_UNIT)}
                typeInput="text"
                requiredInput={true}
                nameText="currency_unit"
                onInput={(e) => onChange(e)}
              />
            </Box>
            <Box className={classes.BoxChild}>
              <Box className={classes.boxLabel}>
                {getLabel(LangConstant.TXT_DESCRIPTION_PRODUCT)}
              </Box>
              <TextareaAutosize
                style={{ width: "100%", height: 56, fontSize: "14px" }}
                aria-label="maximum height"
                placeholder={`${getLabel(
                  LangConstant.TXT_DESCRIPTION_PRODUCT
                )}...`}
                defaultValue=""
                name="description"
                onChange={(e) => onChange(e)}
              />
            </Box>
            <Box className={classes.BoxChild}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel
                  className={classes.inputBox}
                  htmlFor="outlined-age-native-simple"
                >
                  {getLabel(LangConstant.TXT_CATEGORY_PRODUCT)}
                </InputLabel>
                <Select
                  native
                  label="category-product"
                  onInput={(e) => onChange(e)}
                  value={formChange.categoryId ? formChange.categoryId : ""}
                  inputProps={{
                    name: "categoryId",
                    id: "outlined-age-native-simple",
                  }}
                  value={formChange.categoryId ? formChange.categoryId : ""}
                  className={classes.selectBox}
                >
                  <option
                    className={classes.optionBox}
                    aria-label="None"
                    value=""
                  />
                  {category &&
                    category.map((data, index) => (
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
              <PopupBox />
            </Box>
            <Box className={classes.BoxChild}>
              <Box className={classes.boxLabel}>
                {getLabel(LangConstant.TXT_ADD_IMAGE)}
              </Box>
              <AddImage onChooseFile={onGetImage} src={null} />
            </Box>
            <Box className={classes.boxButton}>
              <ButtonBox
                nameButton={getLabel(LangConstant.TXT_CONFIRMATION)}
                onClick={() => onSubmit()}
              />
            </Box>
          </form>
        </Box>
      </Box>
    </RestaurantLayout>
  );
};

const useStyles = makeStyles({
  boxParent: {
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#fafafa",
    backgroundColor: "#F2F3F5",
  },
  boxBorder: {
    margin: "0 auto",
    width: "800px",
    marginTop: "20px",
    marginBottom: "20px",
  },
  BoxChild: {
    boxShadow: " 0 1px 3px 0 rgba(0,0,0,.2),0 1px 6px 0 rgba(0,0,0,.19)",
    background: "#fff",
    padding: "20px 50px",
    boxSizing: "border-box",
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    margin: "10px 0px",
    // borderRadius: "20px"
  },
  boxButton: {
    width: "140px",
    margin: "0 auto",
    height: "40px",
    marginTop: "20px",
  },
  boxLabel: {
    fontSize: "18px",
    fontWeight: "500",
    marginBottom: "5px",
    color: "rgb(48, 92, 139)",
  },
  formControl: {
    width: "calc(100% - 58px)",
  },
  inputBox: {
    color: "rgb(48, 92, 139)",
  },
  optionBox: {
    color: "rgb(48, 92, 139)",
  },
  selectBox: {
    color: "#000000",
  },
  iconButton: {
    padding: "9px",
    color: "#305C8B",
    "& .MuiIconButton-label .MuiSvgIcon-root": {
      fontSize: "2.5rem",
    },
  },
});

export default memo(RestaurantAddCategory);
