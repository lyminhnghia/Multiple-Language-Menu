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
  const [data, setData] = useState({});

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
      setData(shopInfo);
    }
  }, [shopInfo]);

  console.log(data);

  return (
    <ShopLayout>
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <Box className={classes.boxParent}>
          <Box className={classes.boxHeader}>
            {getLabel(LangConstant.TXT_SHOP_INFORMATION)}
          </Box>
          <Box className={classes.boxBody}>
            <Box className={classes.boxContent}>
              <InputText
                nameLabel={getLabel(LangConstant.TXT_TYPE_SHOP)}
                typeInput="text"
                requiredInput={true}
                nameText="shop_type"
                value={data.shop_type ? data.shop_type : ""}
                onInput={(e) => onChange(e)}
              />
              <InputText
                nameLabel={getLabel(LangConstant.TXT_SHOP_NAME)}
                typeInput="text"
                requiredInput={true}
                nameText="shop_name"
                value={data.shop_name ? data.shop_name : ""}
                onInput={(e) => onChange(e)}
              />
              <InputText
                nameLabel={getLabel(LangConstant.TXT_EMAIL)}
                typeInput="text"
                requiredInput={true}
                nameText="email"
                value={data.email ? data.email : ""}
                onInput={(e) => onChange(e)}
              />
              <InputText
                nameLabel={getLabel(LangConstant.TXT_TELEPHONE)}
                typeInput="number"
                requiredInput={true}
                nameText="telephone"
                value={data.telephone ? data.telephone : ""}
                onInput={(e) => onChange(e)}
              />
              <InputText
                nameLabel={getLabel(LangConstant.TXT_WIFI)}
                typeInput="text"
                requiredInput={true}
                nameText="name_wifi"
                value={data.name_wifi ? data.name_wifi : ""}
                onInput={(e) => onChange(e)}
              />
              <InputText
                nameLabel={getLabel(LangConstant.TXT_PASS_WIFI)}
                typeInput="text"
                requiredInput={true}
                nameText="password_wifi"
                value={data.password_wifi ? data.password_wifi : ""}
                onInput={(e) => onChange(e)}
              />
              <InputText
                nameLabel={getLabel(LangConstant.TXT_LINK_WEBSITE)}
                typeInput="text"
                requiredInput={true}
                nameText="url_website"
                value={data.url_website ? data.url_website : ""}
                onInput={(e) => onChange(e)}
              />
              <InputText
                nameLabel={getLabel(LangConstant.TXT_PAYMENTS)}
                typeInput="text"
                requiredInput={true}
                nameText="payment_method"
                defaultValueInput={data.payments}
                onInput={(e) => onChange(e)}
              />
              <InputText
                nameLabel={getLabel(LangConstant.TXT_TIME_WORK)}
                typeInput="text"
                requiredInput={true}
                nameText="time_work"
                defaultValueInput={data.time_work}
                onInput={(e) => onChange(e)}
              />
              <InputText
                nameLabel={getLabel(LangConstant.TXT_PORT_NUMBER)}
                typeInput="text"
                requiredInput={true}
                nameText="port_number"
                input={
                  data.address && data.address.port_number
                    ? data.address.port_number
                    : ""
                }
                onInput={(e) => onChange(e)}
              />
              <InputText
                nameLabel={getLabel(LangConstant.TXT_CITY)}
                typeInput="text"
                requiredInput={true}
                nameText="city"
                input={
                  data.address && data.address.city ? data.address.city : ""
                }
                onInput={(e) => onChange(e)}
              />
              <InputText
                nameLabel={getLabel(LangConstant.TXT_ADDRESS)}
                typeInput="text"
                requiredInput={true}
                nameText="address"
                input={
                  data.address && data.address.address
                    ? data.address.address
                    : ""
                }
                onInput={(e) => onChange(e)}
              />
              <InputText
                nameLabel={getLabel(LangConstant.TXT_BUILDING)}
                typeInput="text"
                requiredInput={true}
                nameText="building"
                input={
                  data.address && data.address.building
                    ? data.address.building
                    : ""
                }
                onInput={(e) => onChange(e)}
              />
            </Box>
            <Box className={classes.boxImg}>
              <EditImage getData={getImgBase64} src={null} />
              <Box className={classes.boxButton}>
                <ButtonBox
                  nameButton={getLabel(LangConstant.TXT_SAVE)}
                  typeButton="submit"
                />
              </Box>
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
});

export default memo(ShopInformation);
