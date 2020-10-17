import React, { memo, useState } from "react";
// import { PathConstant, LangConstant } from "../../../const";
import { Redirect, useHistory } from "react-router-dom";
// import AuthAction from "../../../redux/auth.redux";
import {
  makeStyles,
  Box,
  Container,
  Paper
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import InputText from "../../../components/inputText";
import ButtonBox from "../../../components/buttonBox";

const ShopRegisterAdmin = () => {
  const classes = useStyles();
  // const dispatch = useDispatch();
  // const history = useHistory();
  // const { t: getLabel, i18n } = useTranslation();
  // const isLogin = useSelector((state) => state.authRedux.isLogin);
  const [formChange, setFormChange] = useState({
    companyName:"",
    address: "",
    tel: "",
    staffName: "",
    email: "",
    salesAgency: "",
    ID: "",
    password: "",
    contractPeriod: "",
    shopName: "",
    address2: "",
    notificationEmail: ""
  });

  const handleSubmit = (event)=> {
    event.preventDefault();
    console.log(formChange);
  }
  return (
    <Container className={classes.boxParent}>
      {/* <Paper> */}
        <form onSubmit={handleSubmit} >
          <Box className={classes.boxBorder}>
              <Box className={classes.boxHeader}>Owner information</Box>
              <Box className={classes.boxContent}>
                  <InputText 
                      nameLabel="Company name" 
                      typeInput="text"
                      requiredInput={true}
                      onInput = {e => setFormChange(formChange => ({...formChange,["companyName"]:e.target.value}))}
                  />
                  <InputText 
                      nameLabel="Address"
                      typeInput="text"
                      requiredInput={true}
                      onInput= {e => setFormChange(formChange => ({...formChange,["address"]:e.target.value}))}
                  />
                  <InputText 
                      nameLabel="Tel"
                      typeInput="number"
                      requiredInput={true}
                      onInput = {e => setFormChange(formChange => ({...formChange,["tel"]:e.target.value}))}
                  />
                  <InputText 
                      nameLabel = "Staff name"
                      typeInput = "text"
                      requiredInput = {true}
                      onInput = {e => setFormChange(formChange => ({...formChange,["staffName"]:e.target.value}))}
                  />
                  <InputText 
                      nameLabel = "Email"
                      typeInput = "text"
                      requiredInput = {true}
                      onInput = {e => setFormChange(formChange => ({...formChange,["email"]:e.target.value}))}
                  />
              </Box>
          </Box>
          <Box className={classes.boxBorder}>
              <Box className={classes.boxHeader}>Shop information</Box>
              <Box className={classes.boxContent}>
                  <InputText 
                      nameLabel="Sales agency" 
                      typeInput="number"
                      requiredInput={true}
                      onInput={e => setFormChange(formChange=>({...formChange,["salesAgency"]:e.target.value}))}
                  />
                  <InputText 
                      nameLabel="ID"
                      typeInput="text"
                      requiredInput={true}
                      onInput={e => setFormChange(formChange => ({...formChange,["ID"]:e.target.value}))}
                  />
                  <InputText 
                      nameLabel="Password"
                      typeInput="text"
                      requiredInput={true}
                      onInput={e => setFormChange(formChange => ({...formChange,["password"]:e.target.value}))}
                  />
                  <InputText 
                      nameLabel="Contract period"
                      typeInput="date"
                      defaultValueInput="2020-08-03"
                      requiredInput={true}
                      onInput={e => setFormChange(formChange => ({...formChange,["contractPeriod"]:e.target.value}))}
                  />
                  <InputText 
                      nameLabel="Shop name"
                      typeInput="text"
                      requiredInput={true}
                      onInput={e => setFormChange(formChange => ({...formChange,["shopName"]:e.target.value}))}
                  />
                  <InputText 
                      nameLabel="Address"
                      typeInput="text"
                      requiredInput={true}
                      onInput={e => setFormChange(formChange => ({...formChange,["address2"]:e.target.value}))}
                  />
                  <InputText 
                      nameLabel="Notification email"
                      typeInput="text"
                      requiredInput={true}
                      onInput={e => setFormChange(formChange => ({...formChange,["notificationEmail"]:e.target.value}))}
                  />
              </Box>
          </Box>
          <Box className={classes.boxButton}>
            <ButtonBox nameButton="Confirmation" typeButton="submit"/>
          </Box>
        </form>
      {/* </Paper> */}
    </Container>
  );
};


const useStyles = makeStyles({
  boxParent: {
    margin: "100px",
    width: "1200px",
    height:"100%"
  },
  boxBorder:{
    margin: "0 auto",
    width:"1000px",
    marginTop: "20px",
    marginBottom: "20px"
  },
  boxHeader:{
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
      }
  },
  boxContent: {
    boxShadow:" 0 1px 3px 0 rgba(0,0,0,.2),0 1px 6px 0 rgba(0,0,0,.19)",
    background: "#fff",
    padding: "20px 50px",
    boxSizing: "border-box",
    display: "flex",
    flexWrap: "wrap",
    width: "100%"
  },
  boxButton: {
    width: "140px",
    margin: "0 auto"
  }
});

export default memo(ShopRegisterAdmin);
