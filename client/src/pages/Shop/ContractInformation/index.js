import React, { memo, useState } from "react";
import { ShopLayout } from "../../../layouts";
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
import LabelContract from "./Components/labelContract"
const ContractInformation = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const rows = [
    {name: "Tên cửa hàng", value: "Fastfood"},
    {name: "Thời gian hết hạn", value: "20-5-2020"},
    {name: "Tài khoản", value: "215100002313213"},
    {name: "Tên công ty", value: "Công ty UET"},
    {name: "địa chỉ", value: "Nhà E3 - Đại học Công Nghệ-ĐHQGHN"},
    {name: "số điện thoại", value: "092148245"},
    {name: "tên nhân viên", value: "1231234"},
    {name: "email", value: "1234@vnu.edu.vn"},
  ];
  return (
    <ShopLayout>
      <Box className = {classes.boxParent}>
        <Box className = {classes.boxHeader}> Thông tin hợp đồng</Box>
        <Box className = {classes.boxBody}>
        {
            rows.map(contract =>(
            <LabelContract nameLabel={contract.name} valueLabel = {contract.value}/>
            ))
        }
        </Box>   
      </Box>
    </ShopLayout>
  );
};

const useStyles = makeStyles({
    boxParent: {
        width: "100%",
        height: "100%",
        // backgroundColor: "#F2F3F5",
        margin: "0 auto"
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
    boxBody: {
        width: "100%",
        padding: "20px 100px",
    }
});

export default memo(ContractInformation);
