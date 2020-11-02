import React, { memo, useState, useEffect } from "react";
import { LangConstant } from "../../../const";
import { makeStyles, Box, Container } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { InputText, Notify, MultipleChoice } from "../../../components";
import ButtonBox from "../../../components/buttonBox";
import { AdminLayout } from "../../../layouts";
import { useDispatch, useSelector } from "react-redux";
import AdminAction from "../../../redux/admin.redux";
import moment from "moment";

const ShopRegisterAdmin = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const dispatch = useDispatch();
  const isCreateSuccess = useSelector(
    (state) => state.adminRedux.isCreateSuccess
  );
  const DataError = useSelector((state) => state.adminRedux.errorCreate);
  const [formChange, setFormChange] = useState({});
  const [choice, setChoice] = useState(1);
  const [notifySuccess, setNotifySuccess] = useState("");
  const [notifyError, setNotifyError] = useState("");
  const [open, setOpen] = useState(false);

  const onSubmitForm = (e) => {
    e.preventDefault();
    let formData = formChange;
    formData.state = choice;
    formData.start_contract = formChange.start_contract
      ? onConvertTime(formChange.start_contract)
      : parseInt(Date.now() / 1000);
    formData.end_contract = formChange.end_contract
      ? onConvertTime(formChange.end_contract)
      : parseInt(Date.now() / 1000);
    setOpen(true);
    dispatch(AdminAction.createShop(formData));
  };

  const onChange = (e) => {
    setFormChange({ ...formChange, [e.target.name]: e.target.value });
  };

  const onChangeChoice = (index) => {
    setChoice(index + 1);
  };

  const onConvertTime = (time) => {
    let result = Math.floor(new Date(time).getTime() / 1000);
    return result;
  };

  useEffect(() => {
    if (isCreateSuccess && open) {
      setNotifySuccess(getLabel(LangConstant.TXT_CREATE_SUCCESS));
      setTimeout(() => {
        setOpen(false);
        dispatch(AdminAction.getListShop({ page: 1 }));
      }, 1.5 * 1000);
    }
  }, [isCreateSuccess]);

  useEffect(() => {
    if (DataError && open) {
      setNotifyError(getLabel(LangConstant.TXT_CREATE_FAILED));
      setTimeout(() => setOpen(false), 1.5 * 1000);
    }
  }, [DataError]);

  return (
    <AdminLayout>
      <Container className={classes.boxParent}>
        <form onSubmit={onSubmitForm}>
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
                nameText="address_owner"
                onInput={(e) => onChange(e)}
              />
              <InputText
                nameLabel={getLabel(LangConstant.TXT_TELEPHONE)}
                typeInput="text"
                requiredInput={true}
                nameText="telephone_owner"
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
                nameText="email_owner"
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
                typeInput="text"
                requiredInput={true}
                nameText="shop_type"
                onInput={(e) => onChange(e)}
              />
              <InputText
                nameLabel={getLabel(LangConstant.TXT_ID)}
                typeInput="text"
                requiredInput={true}
                nameText="shopID"
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
                    defaultValueInput={moment(Date.now()).format("YYYY-MM-DD")}
                    requiredInput={true}
                    nameText="start_contract"
                    onInput={(e) => onChange(e)}
                  />
                </Box>
                <Box className={classes.boxFlexContent}>
                  <InputText
                    nameLabel={getLabel(LangConstant.TXT_END_CONTRACT_PERIOD)}
                    typeInput="date"
                    defaultValueInput={moment(Date.now()).format("YYYY-MM-DD")}
                    requiredInput={true}
                    nameText="end_contract"
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
                nameLabel={getLabel(LangConstant.TXT_PORT_NUMBER)}
                typeInput="text"
                requiredInput={true}
                nameText="port_number"
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
                nameText="address_shop"
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
                nameText="email_shop"
                onInput={(e) => onChange(e)}
              />
              <InputText
                nameLabel={getLabel(LangConstant.TXT_TELEPHONE)}
                typeInput="text"
                requiredInput={true}
                nameText="telephone_shop"
                onInput={(e) => onChange(e)}
              />
              <Box className={classes.boxParentCheck}>
                <Box className={classes.boxChildCheck}>
                  {getLabel(LangConstant.TXT_STATE_WORKING)}
                </Box>
                <MultipleChoice
                  className={classes.multipleChoice}
                  listMenu={LangConstant.ARR_ADMIN_WORKING}
                  onChange={onChangeChoice}
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
        <Notify open={open} setOpen={setOpen} dataSuccess={notifySuccess} />
        <Notify open={open} setOpen={setOpen} dataError={notifyError} />
      </Container>
    </AdminLayout>
  );
};

const useStyles = makeStyles({
  boxParent: {
    width: "100%",
    height: "100%",
  },
  boxBorder: {
    margin: "0 auto",
    width: "80%",
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
  boxParentCheck: {
    display: "flex",
    marginTop: "20px",
  },
  boxChildCheck: {
    color: "#305C8B",
    lineHeight: "34px",
    fontSize: "20px",
  },
  multipleChoice: {
    marginLeft: 30,
    height: 40,
  },
});

export default memo(ShopRegisterAdmin);
