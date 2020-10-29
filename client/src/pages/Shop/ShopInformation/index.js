import React, { memo, useState } from "react";
import { ShopLayout } from "../../../layouts";
import { LangConstant } from "../../../const";
import {
  makeStyles,
  Box,
//   InputLabel,
//   TextareaAutosize,
//   Select,
//   FormControl,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import InputText from "../../../components/inputText";
import ButtonBox from "../../../components/buttonBox";
// import PopupBox from "./Components/popup";
// import AddImage from "../../../components/AddImage";
import EditImage from "./Components/editImg"
const ShopInformation = () => {
    const classes = useStyles();
    const { t: getLabel } = useTranslation();
    const [formChange, setFormChange] = useState({
        type_of_store: "2",
        shop_name: "2",
        email: "2",
        telephone: "2",
        wifi: "2",
        pass_wifi: "2",
        link_website: "2",
        payments: "2",
        time_work: "2",
        port_number: "2",
        city: "2",
        address_shop: "2",
        building: "2",
    });
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
                            typeInput="number"
                            requiredInput={true}
                            nameText= "type_of_store"
                            defaultValueInput= {formChange.type_of_store}
                            onInput={(e) => onChange(e)}
                        />
                        <InputText
                            nameLabel={getLabel(LangConstant.TXT_SHOP_NAME)}
                            typeInput="text"
                            requiredInput={true}
                            nameText="shop_name"
                            defaultValueInput= {formChange.shop_name}
                            onInput={(e) => onChange(e)}
                        />
                        <InputText
                            nameLabel={getLabel(LangConstant.TXT_EMAIL)}
                            typeInput="text"
                            requiredInput={true}
                            nameText= "email"
                            defaultValueInput= {formChange.email}
                            onInput={(e) => onChange(e)}
                        />
                        <InputText
                            nameLabel={getLabel(LangConstant.TXT_TELEPHONE)}
                            typeInput="number"
                            requiredInput={true}
                            nameText= "telephone"
                            defaultValueInput= {formChange.telephone}
                            onInput={(e) => onChange(e)}
                        />
                        <InputText
                            nameLabel={getLabel(LangConstant.TXT_WIFI)}
                            typeInput="text"
                            requiredInput={true}
                            nameText="wifi"
                            defaultValueInput= {formChange.wifi}
                            onInput={(e) => onChange(e)}
                        />
                        <InputText
                            nameLabel={getLabel(LangConstant.TXT_PASS_WIFI)}
                            typeInput="text"
                            requiredInput={true}
                            nameText="pass_wifi"
                            defaultValueInput= {formChange.pass_wifi}
                            onInput={(e) => onChange(e)}
                        />
                        <InputText
                            nameLabel={getLabel(LangConstant.TXT_LINK_WEBSITE)}
                            typeInput="text"
                            requiredInput={true}
                            nameText="link_website"
                            defaultValueInput= {formChange.link_website}
                            onInput={(e) => onChange(e)}
                        />
                        <InputText
                            nameLabel={getLabel(LangConstant.TXT_PAYMENTS)}
                            typeInput="text"
                            requiredInput={true}
                            nameText="payments"
                            defaultValueInput= {formChange.payments}
                            onInput={(e) => onChange(e)}
                        />
                        <InputText
                            nameLabel={getLabel(LangConstant.TXT_TIME_WORK)}
                            typeInput="text"
                            requiredInput={true}
                            nameText="time_work"
                            defaultValueInput= {formChange.time_work}
                            onInput={(e) => onChange(e)}
                        />
                        <InputText
                            nameLabel={getLabel(LangConstant.TXT_PORT_NUMBER)}
                            typeInput="text"
                            requiredInput={true}
                            nameText="port_number"
                            defaultValueInput= {formChange.port_number}
                            onInput={(e) => onChange(e)}
                        />
                        <InputText
                            nameLabel={getLabel(LangConstant.TXT_CITY)}
                            typeInput="text"
                            requiredInput={true}
                            nameText="city"
                            defaultValueInput= {formChange.city}
                            onInput={(e) => onChange(e)}
                        />
                        <InputText
                            nameLabel={getLabel(LangConstant.TXT_ADDRESS)}
                            typeInput="text"
                            requiredInput={true}
                            nameText="address_shop"
                            defaultValueInput= {formChange.address_shop}
                            onInput={(e) => onChange(e)}
                        />
                        <InputText
                            nameLabel={getLabel(LangConstant.TXT_BUILDING)}
                            typeInput="text"
                            requiredInput={true}
                            nameText="building"
                            defaultValueInput= {formChange.building}
                            onInput={(e) => onChange(e)}
                        />
                    </Box>
                    <Box className={classes.boxImg}>
                        <EditImage getData={getImgBase64} src={null}/>
                        <Box className={classes.boxButton}>
                            <ButtonBox 
                            nameButton={getLabel(LangConstant.TXT_SAVE)}
                            typeButton="submit"/>
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
    flexWrap: "wrap"
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
    marginTop : "40px"
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
    marginTop: "20px"
  }
});

export default memo(ShopInformation);
