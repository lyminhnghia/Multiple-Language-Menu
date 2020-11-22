import React, { memo, useState, useEffect } from "react";
import { LangConstant } from "../../../const";
import { makeStyles, Box } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import LabelText from "./Components/labelText";

const Introduce = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  return (
    <Box className={classes.boxParent}>
      <Box className={classes.boxHeader}>
        <Box className={classes.boxName}>MENUU</Box>
      </Box>
      <Box className={classes.boxBody}>
        {data.map((Data, index) => (
          <Box key={"intro" + index} className={classes.boxChild}>
            <Box className={classes.boxQrcode}>
              <Box
                className={classes.boxQr}
                style={{ backgroundImage: `url(${Data.src})` }}
              ></Box>
            </Box>
            <Box className={classes.boxContent}>
              <LabelText nameLabel="Tên nhà hàng" nameText={Data.name} />
              <LabelText
                nameLabel="Loại nhà hàng"
                nameText={Data.description}
              />
              <LabelText nameLabel="Số điện thoại" nameText={Data.number} />
              <LabelText nameLabel="Địa chỉ" nameText={Data.address} />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const data = [
  {
    id: "id",
    name: "Manwah",
    description: "Nhà hàng buffet lẩu thịt",
    number: "091328283",
    address: "Số 16 Dương Đình Nghệ",
    src:
      "https://i.ibb.co/Gsrvfwy/qr-code-bc94057f452f4806af70fd34540f72ad.png",
  },
  {
    id: "id",
    name: "Gogi house",
    description: "Nhà hàng buffet nướng",
    number: "091328283",
    address: "Vincom Nguyễn Chí Thanh - Hà Nội",
    src:
      "https://i.ibb.co/Gsrvfwy/qr-code-bc94057f452f4806af70fd34540f72ad.png",
  },
  {
    id: "id",
    name: "Nhất nướng",
    description: "Buffet nướng bình dân",
    number: "05237623323",
    address: "Số 23 Hồ Tùng Mậu - Cầu Giấy - Hà Nội",
    src:
      "https://i.ibb.co/Gsrvfwy/qr-code-bc94057f452f4806af70fd34540f72ad.png",
  },
];

const useStyles = makeStyles({
  boxParent: {
    width: "100vw",
    height: "100vh",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
  },
  boxHeader: {
    width: "100%",
    height: "350px",
    backgroundColor: "rgb(48, 92, 139)",
  },
  boxBody: {
    width: "1000px",
    margin: "0 auto",
    marginTop: "-100px",
    backgroundColor: "#ffffff",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    paddingTop: "10px",
    display: "flex",
    flexWrap: "wrap",
    boxShadow: "0 1px 3px 0 rgba(0,0,0,.2), 0 1px 6px 0 rgba(0,0,0,.19)",
  },
  boxChild: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    margin: "10px 20px 0px 20px",
    paddingBottom: "20px",
    borderBottom: "1px solid rgb(0 0 0 / 0.1)",
  },
  boxName: {
    color: "#ffffff",
    fontSize: "60px",
    fontWeight: "600",
    textAlign: "center",
    marginTop: "90px",
  },
  boxQrcode: {
    width: "200px",
  },
  boxContent: {
    width: "calc(100% - 200px)",
    padding: "0px 0px 20px 20px",
  },
  boxQr: {
    width: "200px",
    height: "200px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    margin: "0 auto",
  },
});

export default memo(Introduce);
