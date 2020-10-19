import React, { memo, useState } from "react";
import { LangConstant } from "../../../const";
import {
  makeStyles,
  Box,
  Container,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import InputText from "../../../components/inputText";
import ButtonBox from "../../../components/buttonBox";
import {AdminLayout} from "../../../layouts"
const ProfileAdmin = () => {
  const classes = useStyles();
  const { t: getLabel} = useTranslation();
  const [formChange, setFormChange] = useState({});

  const handleSubmit = e => {
    e.preventDefault()
    console.log(formChange)
  }

  const onChange = e => {
    setFormChange({...formChange, [e.target.name]: e.target.value})
    console.log(e.target.value, e.target.name)
  }
  return (
    <AdminLayout>
        <Container className={classes.boxParent}>
            <form onSubmit={handleSubmit} >
                <Box className={classes.boxBorder}>
                    <Box className={classes.boxContent}>
                        <InputText 
                            nameLabel={getLabel(LangConstant.TXT_USER_NAME)}
                            typeInput="text"
                            requiredInput={true}
                            nameText="user_name"
                            onInput = {e => onChange(e)}
                        />
                        <InputText 
                            nameLabel={getLabel(LangConstant.TXT_EMAIL)}
                            typeInput="text"
                            requiredInput={true}
                            nameText="email"
                            onInput = {e => onChange(e)}
                        />
                        {/* <InputText 
                            nameLabel = {getLabel(LangConstant.TXT_STATE)}
                            typeInput = "number"
                            requiredInput = {true}
                            nameText = "state"
                            onInput = {e => onChange(e)}
                        /> */}
                        <InputText 
                            nameLabel = {getLabel(LangConstant.TXT_ROLE)}
                            typeInput = "text"
                            requiredInput = {true}
                            nameText = "role"
                            onInput = {e => onChange(e)}
                        />
                        <InputText 
                            nameLabel = {getLabel(LangConstant.TXT_CREATED)}
                            typeInput = "text"
                            requiredInput = {true}
                            nameText="create"
                            onInput = {e => onChange(e)}
                            disabled= {true}
                        />
                        <Box className={classes.boxButton}>
                            <ButtonBox nameButton={getLabel(LangConstant.TXT_CHANGE_PASS)} typeButton="submit" />
                        </Box>
                        <Box className={classes.boxButton}>
                            <ButtonBox nameButton={getLabel(LangConstant.TXT_EDIT_PROFILE)} typeButton="submit" />
                        </Box>
                        <Box className={classes.boxButton}>
                            <ButtonBox nameButton={getLabel(LangConstant.TXT_SAVE_PROFILE)} typeButton="submit" />
                        </Box>
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  boxBorder:{
    margin: "0 auto",
    width: "800px",
    marginTop: "20px",
    marginBottom: "20px"
  },
  boxContent: {
    boxShadow:" 0 1px 3px 0 rgba(0,0,0,.2),0 1px 6px 0 rgba(0,0,0,.19)",
    background: "#fff",
    padding: "20px 50px",
    boxSizing: "border-box",
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    borderRadius: "20px"
  },
  boxButton: {
    width: "140px",
    margin: "0 auto",
    height: "40px",
    marginTop: "20px"
  },
});

export default memo(ProfileAdmin);
