import React, { memo, useState, useEffect } from "react";
import { ShopLayout } from "../../../layouts";
import { LangConstant } from "../../../const";
import { makeStyles, Box } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import InputText from "../../../components/inputText";
import ButtonBox from "../../../components/buttonBox";
import EditImage from "./Components/editImg";
import { useDispatch, useSelector } from "react-redux";
import ShopInfoAction from "../../../redux/shopInfo.redux";

const ShopInformation = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const dispatch = useDispatch();
  const shopInfo = useSelector((state) => state.shopInfoRedux.ShopInfo);
  const [formChange, setFormChange] = useState({});

  if (shopInfo === null) {
    dispatch(ShopInfoAction.getShopInfo({}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formChange);
  };

  const onChange = (e) => {
    setFormChange({ ...formChange, [e.target.name]: e.target.value });
    console.log(e.target.value, e.target.name);
  };
  const getImgBase64 = (data) => {
    setFormChange({ ...formChange, ["base-64"]: data });
  };

  useEffect(() => {
    if (shopInfo) {
      setFormChange(shopInfo);
    }
  }, [shopInfo]);

  return (
    <ShopLayout>
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <Box className={classes.boxParent}>
          <Box className={classes.boxHeader}>
            <Box className={classes.boxLabel}>
              {getLabel(LangConstant.TXT_SHOP_INFORMATION)}
            </Box>
            
            <Box className={classes.boxButton}>
              <ButtonBox
                nameButton={getLabel(LangConstant.TXT_SAVE)}
                typeButton="submit"
              />
            </Box>
            <Box className={classes.boxButton}>
              <ButtonBox
                nameButton={getLabel(LangConstant.TXT_SAVE)}
                typeButton="submit"
              />
            </Box>
          </Box>
          <Box className={classes.boxBody}>
            <Box className={classes.boxContent}>
              <InputText
                nameLabel={getLabel(LangConstant.TXT_TYPE_SHOP)}
                typeInput="text"
                requiredInput={true}
                nameText="shop_type"
                value={formChange.shop_type ? formChange.shop_type : ""}
                onInput={(e) => onChange(e)}
              />
              <InputText
                nameLabel={getLabel(LangConstant.TXT_SHOP_NAME)}
                typeInput="text"
                requiredInput={true}
                nameText="shop_name"
                value={formChange.shop_name ? formChange.shop_name : ""}
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
              <InputText
                nameLabel={getLabel(LangConstant.TXT_WIFI)}
                typeInput="text"
                requiredInput={true}
                nameText="name_wifi"
                value={formChange.name_wifi ? formChange.name_wifi : ""}
                onInput={(e) => onChange(e)}
              />
              <InputText
                nameLabel={getLabel(LangConstant.TXT_PASS_WIFI)}
                typeInput="text"
                requiredInput={true}
                nameText="password_wifi"
                value={formChange.password_wifi ? formChange.password_wifi : ""}
                onInput={(e) => onChange(e)}
              />
              <InputText
                nameLabel={getLabel(LangConstant.TXT_LINK_WEBSITE)}
                typeInput="text"
                requiredInput={true}
                nameText="url_website"
                value={formChange.url_website ? formChange.url_website : ""}
                onInput={(e) => onChange(e)}
              />
              <InputText
                nameLabel={getLabel(LangConstant.TXT_PAYMENTS)}
                typeInput="text"
                requiredInput={true}
                nameText="payment_method"
                defaultValueInput={formChange.payments}
                onInput={(e) => onChange(e)}
              />
              <InputText
                nameLabel={getLabel(LangConstant.TXT_TIME_WORK)}
                typeInput="text"
                requiredInput={true}
                nameText="time_work"
                defaultValueInput={formChange.time_work}
                onInput={(e) => onChange(e)}
              />
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
            <Box className={classes.boxImg}>
              <EditImage getData={getImgBase64} src={null} />
              {/* <Box className={classes.boxButton}>
                <ButtonBox
                  nameButton={getLabel(LangConstant.TXT_SAVE)}
                  typeButton="submit"
                />
              </Box> */}
            </Box>
          </Box>
        </Box>
      </form>
    </ShopLayout>
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
  boxHeader: {
    width: "100%",
    backgroundColor: "#F2F3F5",
    height: "200px",
    fontSize: "40px",
    lineHeight: "200px",
    fontWeight: "500",
    paddingLeft: "100px",
  },
  boxButton: {
    width: "140px",
    margin: "0 auto",
    height: "40px",
    marginTop: "40px",
  },
  boxBody: {
    width: "100%",
    padding: "20px 100px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  boxContent: {
    width: "60%",
  },
  boxImg: {
    marginTop: "20px",
  },
  boxLabel: {
    
  }
});

export default memo(ShopInformation);
