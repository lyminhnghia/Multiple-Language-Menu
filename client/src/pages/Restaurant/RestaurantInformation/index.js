import React, { memo, useState, useEffect } from "react";
import { RestaurantLayout } from "../../../layouts";
import { LangConstant } from "../../../const";
import { makeStyles, Box, Checkbox } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { InputText, BoxButton, AddImage } from "../../../components";
import { useDispatch, useSelector } from "react-redux";
import RestaurantInfoAction from "../../../redux/restaurantInfo.redux";

const RestaurantInformation = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const dispatch = useDispatch();
  const restaurantInfo = useSelector(
    (state) => state.restaurantInfoRedux.RestaurantInfo
  );

  const [isEditing, setIsEditing] = useState(false);
  const [formChange, setFormChange] = useState({});

  if (restaurantInfo === null) {
    dispatch(RestaurantInfoAction.getRestaurantInfo({}));
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formChange);
  };

  const onChange = (e) => {
    setFormChange({ ...formChange, [e.target.name]: e.target.value });
  };
  const getImage = (data) => {
    setFormChange({ ...formChange, ["url_image"]: data });
  };

  const getDefaultsValue = () => {
    setFormChange(restaurantInfo);
    setIsEditing(!isEditing);
  };

  useEffect(() => {
    if (restaurantInfo) {
      setFormChange(restaurantInfo);
    }
  }, [restaurantInfo]);

  return (
    <RestaurantLayout>
      <form onSubmit={onSubmit} style={{ width: "100%" }}>
        <Box className={classes.boxParent}>
          <Box className={classes.boxHeader}>
            <Box className={classes.boxLabel}>
              {getLabel(LangConstant.TXT_RESTAURANT_INFORMATION)}
            </Box>
          </Box>
          <Box className={classes.boxBody}>
            <Box className={classes.boxContent}>
              <Box className={classes.BoxChild}>
                <InputText
                  nameLabel={getLabel(LangConstant.TXT_TYPE_RESTAURANT)}
                  typeInput="text"
                  requiredInput={true}
                  nameText="restaurant_type"
                  value={
                    formChange.restaurant_type ? formChange.restaurant_type : ""
                  }
                  onInput={(e) => onChange(e)}
                />
                <InputText
                  nameLabel={getLabel(LangConstant.TXT_RESTAURANT_NAME)}
                  typeInput="text"
                  requiredInput={true}
                  nameText="restaurant_name"
                  value={
                    formChange.restaurant_name ? formChange.restaurant_name : ""
                  }
                  onInput={(e) => onChange(e)}
                />
                <InputText
                  nameLabel={getLabel(LangConstant.TXT_EMAIL)}
                  typeInput="text"
                  requiredInput={true}
                  nameText="email"
                  value={formChange.email ? formChange.email : ""}
                  onInput={(e) => onChange(e)}
                />
                <InputText
                  nameLabel={getLabel(LangConstant.TXT_TELEPHONE)}
                  typeInput="number"
                  requiredInput={true}
                  nameText="telephone"
                  value={formChange.telephone ? formChange.telephone : ""}
                  onInput={(e) => onChange(e)}
                />
              </Box>
              <Box className={classes.BoxChild}>
                <Box className={classes.boxImg}>
                  <AddImage
                    onChooseFile={getImage}
                    src={formChange.url_image ? formChange.url_image : ""}
                  />
                </Box>
              </Box>
              <Box className={classes.BoxChild}>
                <InputText
                  nameLabel={getLabel(LangConstant.TXT_WIFI)}
                  typeInput="text"
                  nameText="name_wifi"
                  value={formChange.name_wifi ? formChange.name_wifi : ""}
                  onInput={(e) => onChange(e)}
                />
                <InputText
                  nameLabel={getLabel(LangConstant.TXT_PASS_WIFI)}
                  typeInput="text"
                  nameText="password_wifi"
                  value={
                    formChange.password_wifi ? formChange.password_wifi : ""
                  }
                  onInput={(e) => onChange(e)}
                />
                <InputText
                  nameLabel={getLabel(LangConstant.TXT_LINK_WEBSITE)}
                  typeInput="text"
                  nameText="url_website"
                  value={formChange.url_website ? formChange.url_website : ""}
                  onInput={(e) => onChange(e)}
                />
                <Box
                  display="flex"
                  marginTop="10px"
                  height="52.75px"
                  width="100%"
                  alignItems="flex-end"
                >
                  <Box fontSize="20px" color="rgb(48, 92, 139)">
                    {getLabel(LangConstant.TXT_PAYMENTS)}
                  </Box>
                  <Box marginLeft="20px" marginRight="10px">
                    {getLabel(LangConstant.TXT_CASH)}:
                  </Box>
                  <Checkbox style={{ color: "rgb(48, 92, 139)", padding: 0 }} />
                  <Box marginLeft="20px" marginRight="10px">
                    {" "}
                    {getLabel(LangConstant.TXT_CREDIT_CARD)}:
                  </Box>
                  <Checkbox style={{ color: "rgb(48, 92, 139)", padding: 0 }} />
                  <Box marginLeft="20px" marginRight="10px">
                    {" "}
                    {getLabel(LangConstant.TXT_APP)}:
                  </Box>
                  <Checkbox style={{ color: "rgb(48, 92, 139)", padding: 0 }} />
                  <Box marginLeft="20px" marginRight="10px">
                    {getLabel(LangConstant.TXT_ETC)}:
                  </Box>
                  <Checkbox style={{ color: "rgb(48, 92, 139)", padding: 0 }} />
                </Box>
                {/* <InputText
                  nameLabel={getLabel(LangConstant.TXT_PAYMENTS)}
                  typeInput="text"
                  nameText="payment_method"
                  defaultValueInput={formChange.payments}
                  onInput={(e) => onChange(e)}
                /> */}
                <InputText
                  nameLabel={getLabel(LangConstant.TXT_TIME_WORK)}
                  typeInput="text"
                  nameText="time_work"
                  defaultValueInput={formChange.time_work}
                  onInput={(e) => onChange(e)}
                />
              </Box>
              <Box className={classes.BoxChild}>
                <InputText
                  nameLabel={getLabel(LangConstant.TXT_PORT_NUMBER)}
                  typeInput="text"
                  requiredInput={true}
                  nameText="port_number"
                  value={formChange.port_number ? formChange.port_number : ""}
                  onInput={(e) => onChange(e)}
                />
                <InputText
                  nameLabel={getLabel(LangConstant.TXT_CITY)}
                  typeInput="text"
                  requiredInput={true}
                  nameText="city"
                  value={formChange.city ? formChange.city : ""}
                  onInput={(e) => onChange(e)}
                />
                <InputText
                  nameLabel={getLabel(LangConstant.TXT_ADDRESS)}
                  typeInput="text"
                  requiredInput={true}
                  nameText="address"
                  value={formChange.address ? formChange.address : ""}
                  onInput={(e) => onChange(e)}
                />
                <InputText
                  nameLabel={getLabel(LangConstant.TXT_BUILDING)}
                  typeInput="text"
                  requiredInput={true}
                  nameText="building"
                  value={formChange.building ? formChange.building : ""}
                  onInput={(e) => onChange(e)}
                />
              </Box>
            </Box>
            <Box className={classes.BoxButtonForm}>
              {isEditing ? (
                <>
                  <Box className={`${classes.boxButton} ${classes.boxChange}`}>
                    <BoxButton
                      nameButton={getLabel(LangConstant.TXT_CANCER)}
                      onClick={(e) => getDefaultsValue()}
                    />
                  </Box>
                  <Box className={classes.boxButton}>
                    <BoxButton
                      nameButton={getLabel(LangConstant.TXT_SAVE)}
                      typeButton="submit"
                    />
                  </Box>
                </>
              ) : (
                <Box className={classes.boxButton}>
                  <BoxButton
                    nameButton={getLabel(LangConstant.TXT_EDIT)}
                    onClick={() => setIsEditing(!isEditing)}
                  />
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </form>
    </RestaurantLayout>
  );
};

const useStyles = makeStyles({
  boxParent: {
    width: "100%",
    height: "100%",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
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
  },
  boxHeader: {
    width: "100%",
    backgroundColor: "#F2F3F5",
    height: 200,
    display: "flex",
    alignItems: "center",
    padding: "0px 100px",
    justifyContent: "center",
  },
  boxButton: {
    width: 140,
    height: 40,
    marginLeft: 30,
  },
  boxBody: {
    width: "80%",
    margin: "20px auto",
    display: "flex",
    flexWrap: "wrap",
  },
  boxContent: {
    width: "100%",
  },
  boxImg: {
    margin: "20px auto",
    width: "80%",
  },
  boxLabel: {
    fontSize: 60,
    fontWeight: 500,
  },
  boxChange: {
    "& .MuiButtonBase-root": {
      backgroundColor: "#ff4d4d",
    },
  },
  BoxButtonForm: {
    display: "flex",
    justifyContent: "center",
    marginTop: 20,
    width: "100%",
  },
});

export default memo(RestaurantInformation);
