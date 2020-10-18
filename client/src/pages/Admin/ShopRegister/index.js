import React, { memo, useState } from "react";
import { LangConstant } from "../../../const";
import { makeStyles, Box, Container, Switch } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import InputText from "../../../components/inputText";
import ButtonBox from "../../../components/buttonBox";
import { AdminLayout } from "../../../layouts";
const ShopRegisterAdmin = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const [formChange, setFormChange] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formChange);
  };

  const onChange = (e) => {
    setFormChange({ ...formChange, [e.target.name]: e.target.value });
    console.log(e.target.value, e.target.name);
  };
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <AdminLayout>
      <Container className={classes.boxParent}>
        <form onSubmit={handleSubmit}>
          <Box className={classes.boxBorder}>
            <Box className={classes.boxHeader}>
              {getLabel(LangConstant.TXT_OWNER_INFORMATION)}
            </Box>
            <Box className={classes.boxContent}>
              <InputText
                nameLabel={getLabel(LangConstant.TXT_COMPANY_NAME)}
                typeInput="text"
                requiredInput={true}
                nameText="company_name"
                onInput={(e) => onChange(e)}
              />
              <InputText
                nameLabel={getLabel(LangConstant.TXT_ADDRESS)}
                typeInput="text"
                requiredInput={true}
                nameText="address1"
                onInput={(e) => onChange(e)}
              />
              <InputText
                nameLabel={getLabel(LangConstant.TXT_TELEPHONE)}
                typeInput="number"
                requiredInput={true}
                nameText="tel"
                onInput={(e) => onChange(e)}
              />
              <InputText
                nameLabel={getLabel(LangConstant.TXT_STAFF_NAME)}
                typeInput="text"
                requiredInput={true}
                nameText="staff_name"
                onInput={(e) => onChange(e)}
              />
              <InputText
                nameLabel={getLabel(LangConstant.TXT_EMAIL)}
                typeInput="text"
                requiredInput={true}
                nameText="email"
                onInput={(e) => onChange(e)}
              />
            </Box>
          </Box>
          <Box className={classes.boxBorder}>
            <Box className={classes.boxHeader}>
              {getLabel(LangConstant.TXT_SHOP_INFORMATION)}
            </Box>
            <Box className={classes.boxContent}>
              <InputText
                nameLabel={getLabel(LangConstant.TXT_SALES_AGENCY)}
                typeInput="number"
                requiredInput={true}
                nameText="sales_agency"
                onInput={(e) => onChange(e)}
              />
              <InputText
                nameLabel={getLabel(LangConstant.TXT_ID)}
                typeInput="text"
                requiredInput={true}
                nameText="ID"
                onInput={(e) => onChange(e)}
              />
              <InputText
                nameLabel={getLabel(LangConstant.TXT_PASSWORD)}
                typeInput="password"
                requiredInput={true}
                nameText="password"
                onInput={(e) => onChange(e)}
              />
              <InputText
                nameLabel={getLabel(LangConstant.TXT_CONFIRM_PASSWORD)}
                typeInput="password"
                requiredInput={true}
                nameText="confirm_password"
                onInput={(e) => onChange(e)}
              />
              <Box className={classes.boxFlex}>
                <Box className={classes.boxFlexContent}>
                  <InputText
                    nameLabel={getLabel(LangConstant.TXT_START_CONTRACT_PERIOD)}
                    typeInput="date"
                    defaultValueInput="2020-08-03"
                    requiredInput={true}
                    nameText="start_contract_period"
                    onInput={(e) => onChange(e)}
                  />
                </Box>
                <Box className={classes.boxFlexContent}>
                  <InputText
                    nameLabel={getLabel(LangConstant.TXT_END_CONTRACT_PERIOD)}
                    typeInput="date"
                    defaultValueInput="2020-08-03"
                    requiredInput={true}
                    nameText="end_contract_period"
                    onInput={(e) => onChange(e)}
                  />
                </Box>
              </Box>
              <InputText
                nameLabel={getLabel(LangConstant.TXT_SHOP_NAME)}
                typeInput="text"
                requiredInput={true}
                nameText="shop_name"
                onInput={(e) => onChange(e)}
              />
              <InputText
                nameLabel={getLabel(LangConstant.TXT_POST_NUMBER)}
                typeInput="text"
                requiredInput={true}
                nameText="post_number"
                onInput={(e) => onChange(e)}
              />
              <InputText
                nameLabel={getLabel(LangConstant.TXT_CITY)}
                typeInput="text"
                requiredInput={true}
                nameText="city"
                onInput={(e) => onChange(e)}
              />
              <InputText
                nameLabel={getLabel(LangConstant.TXT_ADDRESS)}
                typeInput="text"
                requiredInput={true}
                nameText="address2"
                onInput={(e) => onChange(e)}
              />
              <InputText
                nameLabel={getLabel(LangConstant.TXT_BUILDING)}
                typeInput="text"
                requiredInput={true}
                nameText="building"
                onInput={(e) => onChange(e)}
              />
              <InputText
                nameLabel={getLabel(LangConstant.TXT_NOTIFICATION_EMAIL)}
                typeInput="text"
                requiredInput={true}
                nameText="notification_email"
                onInput={(e) => onChange(e)}
              />
              <Box style={{ display: "flex", marginTop: "20px" }}>
                <Box
                  style={{
                    color: "#305C8B",
                    lineHeight: "34px",
                    fontSize: "20px",
                  }}
                >
                  Trạng thái hoạt động
                </Box>
                <Switch
                  checked={state.checkedB}
                  onChange={handleChange}
                  color="primary"
                  name="checkedB"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </Box>
            </Box>
          </Box>
          <Box className={classes.boxButton}>
            <ButtonBox
              nameButton={getLabel(LangConstant.TXT_CONFIRMATION)}
              typeButton="submit"
            />
          </Box>
        </form>
      </Container>
    </AdminLayout>
  );
};

const useStyles = makeStyles({
  boxParent: {
    width: "1200px",
    height: "100%",
  },
  boxBorder: {
    margin: "0 auto",
    width: "1000px",
    marginTop: "20px",
    marginBottom: "20px",
  },
  boxHeader: {
    width: "200px",
    background: "rgb(48, 92, 139)",
    border: "none",
    boxShadow: "-4px -2px 6px -3px rgba(0,0,0,.2)",
    height: "35px",
    position: "relative",
    paddingLeft: "15px",
    fontSize: "18px",
    color: "#fff",
    lineHeight: "35px",
    fontWeight: "500",
    "&:before": {
      background: "rgb(48, 92, 139)",
      boxShadow: "0 0 10px -1px rgba(0,0,0,.2)",
      content: "''",
      height: "36px",
      width: "51px",
      overflow: "hidden",
      position: "absolute",
      right: "-31px",
      top: "38%",
      transform: "rotate(45deg)",
      zIndex: "-1",
    },
  },
  boxContent: {
    boxShadow: " 0 1px 3px 0 rgba(0,0,0,.2),0 1px 6px 0 rgba(0,0,0,.19)",
    background: "#fff",
    padding: "20px 50px",
    boxSizing: "border-box",
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
  },
  boxButton: {
    width: "140px",
    margin: "0 auto",
    height: "40px",
  },
  boxFlex: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "space-between",
  },
  boxFlexContent: {
    width: "49%",
  },
});

export default memo(ShopRegisterAdmin);
