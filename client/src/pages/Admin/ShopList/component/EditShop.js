import React, { memo, useState, useEffect } from "react";
import { LangConstant } from "../../../../const";
import { makeStyles, Box, Container } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { InputText, Notify, MultipleChoice } from "../../../../components";
import ButtonBox from "../../../../components/buttonBox";
import { AdminLayout } from "../../../../layouts";
import { useDispatch, useSelector } from "react-redux";
import AdminAction from "../../../../redux/admin.redux";
import moment from "moment";

const EditShop = (props) => {
  const { setOpen } = props;
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const dispatch = useDispatch();
  const dataShop = useSelector((state) => state.adminRedux.dataGet);
  const [showData, setShowData] = useState({});
  const [formChange, setFormChange] = useState({});
  const [choice, setChoice] = useState(1);

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

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (dataShop) {
      setShowData(dataShop);
    }
  }, [dataShop]);

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
                value={showData.owner ? showData.owner.company_name : ""}
                onInput={(e) => onChange(e)}
              />
              <InputText
                nameLabel={getLabel(LangConstant.TXT_ADDRESS)}
                typeInput="text"
                requiredInput={true}
                nameText="address_owner"
                value={showData.owner ? showData.owner.address : ""}
                onInput={(e) => onChange(e)}
              />
              <InputText
                nameLabel={getLabel(LangConstant.TXT_TELEPHONE)}
                typeInput="text"
                requiredInput={true}
                nameText="telephone_owner"
                value={showData.owner ? showData.owner.telephone : ""}
                onInput={(e) => onChange(e)}
              />
              <InputText
                nameLabel={getLabel(LangConstant.TXT_STAFF_NAME)}
                typeInput="text"
                requiredInput={true}
                nameText="staff_name"
                value={showData.owner ? showData.owner.staff_name : ""}
                onInput={(e) => onChange(e)}
              />
              <InputText
                nameLabel={getLabel(LangConstant.TXT_EMAIL)}
                typeInput="text"
                requiredInput={true}
                nameText="email_owner"
                value={showData.owner ? showData.owner.email : ""}
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
                value={showData ? showData.shop_type : ""}
                onInput={(e) => onChange(e)}
              />
              <Box className={classes.boxFlex}>
                <Box className={classes.boxFlexContent}>
                  <InputText
                    nameLabel={getLabel(LangConstant.TXT_START_CONTRACT_PERIOD)}
                    typeInput="date"
                    value={
                      showData
                        ? moment(showData.start_contract * 1000).format(
                            "YYYY-MM-DD"
                          )
                        : moment(Date.now()).format("YYYY-MM-DD")
                    }
                    requiredInput={true}
                    nameText="start_contract"
                    onInput={(e) => onChange(e)}
                  />
                </Box>
                <Box className={classes.boxFlexContent}>
                  <InputText
                    nameLabel={getLabel(LangConstant.TXT_END_CONTRACT_PERIOD)}
                    typeInput="date"
                    value={
                      showData
                        ? moment(showData.end_contract * 1000).format(
                            "YYYY-MM-DD"
                          )
                        : moment(Date.now()).format("YYYY-MM-DD")
                    }
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
                value={showData ? showData.shop_name : ""}
                nameText="shop_name"
                onInput={(e) => onChange(e)}
              />
              <InputText
                nameLabel={getLabel(LangConstant.TXT_PORT_NUMBER)}
                typeInput="text"
                requiredInput={true}
                nameText="port_number"
                value={showData.address ? showData.address.port_number : ""}
                onInput={(e) => onChange(e)}
              />
              <InputText
                nameLabel={getLabel(LangConstant.TXT_CITY)}
                typeInput="text"
                requiredInput={true}
                nameText="city"
                value={showData.address ? showData.address.city : ""}
                onInput={(e) => onChange(e)}
              />
              <InputText
                nameLabel={getLabel(LangConstant.TXT_ADDRESS)}
                typeInput="text"
                requiredInput={true}
                nameText="address_shop"
                value={showData.address ? showData.address.address : ""}
                onInput={(e) => onChange(e)}
              />
              <InputText
                nameLabel={getLabel(LangConstant.TXT_BUILDING)}
                typeInput="text"
                requiredInput={true}
                nameText="building"
                value={showData.address ? showData.address.building : ""}
                onInput={(e) => onChange(e)}
              />
              <InputText
                nameLabel={getLabel(LangConstant.TXT_NOTIFICATION_EMAIL)}
                typeInput="text"
                requiredInput={true}
                nameText="email_shop"
                value={showData ? showData.email : ""}
                onInput={(e) => onChange(e)}
              />
              <InputText
                nameLabel={getLabel(LangConstant.TXT_TELEPHONE)}
                typeInput="text"
                requiredInput={true}
                nameText="telephone_shop"
                value={showData ? showData.telephone : ""}
                onInput={(e) => onChange(e)}
              />
              <Box className={classes.boxParentCheck}>
                <Box className={classes.boxChildCheck}>
                  {getLabel(LangConstant.TXT_STATE_WORKING)}
                </Box>
                <MultipleChoice
                  className={classes.multipleChoice}
                  listMenu={LangConstant.ARR_ADMIN_STATE}
                  defaultValue={
                    showData.account ? showData.account.state - 1 : 0
                  }
                  onChange={onChangeChoice}
                />
              </Box>
            </Box>
          </Box>
          <Box className={classes.buttonParent}>
            <Box className={classes.boxCancel}>
              <ButtonBox
                nameButton={getLabel(LangConstant.TXT_CANCER)}
                typeButton="cancel"
                onClick={onClose}
              />
            </Box>
            <Box className={classes.boxSave}>
              <ButtonBox
                nameButton={getLabel(LangConstant.TXT_SAVE)}
                typeButton="submit"
              />
            </Box>
          </Box>
        </form>
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
  buttonParent: {
    display: "flex",
    justifyContent: "center",
  },
  boxCancel: {
    width: "140px",
    height: "40px",
    marginRight: 20,
  },
  boxSave: {
    width: "140px",
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

export default memo(EditShop);
