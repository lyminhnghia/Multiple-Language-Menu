import React, { memo } from "react";
import { makeStyles, Box } from "@material-ui/core";
import { CustomerLayout } from "../../../layouts";
import { useTranslation } from "react-i18next";

const InforRestaurant = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const data = [
    {
      id: "id",
      name: "Buffet thịt nướng Gogi",
      description: "Nhà hàng buffet lẩu thịt",
      number: "091328283",
      address: "Số 16, Lê Văn Lương, Cầu giấy, Hà Nội",
      time: "8h-22h",
      src:
        "http://localhost:5000/api/image/c8a0bfba8df477dae6d1ba0b1ae1b3ca-20180207093718-1720.jpg",
    },
  ];
  return (
    <CustomerLayout>
      <Box className={classes.boxBorder}>
        <Box className={classes.boxHeader}>Nhà hàng:</Box>
        <Box className={classes.boxBody}>
          {data.map((data, index) => (
            <Box key={"b" + index}>
              <Box className={classes.boxImage}>
                <Box
                  className={classes.boxImg}
                  style={{ backgroundImage: `url(${data.src})` }}
                />
              </Box>
              <Box className={classes.boxContent}>
                <Box className={classes.boxDataName}>Nhà hàng: {data.name}</Box>
                <Box className={classes.boxDataName}>
                  Mô tả: {data.description}
                </Box>
                <Box className={classes.boxDataName}>
                  Số điện thoại: {data.number}
                </Box>
                <Box className={classes.boxDataName}>
                  Giờ mở cửa: {data.time}
                </Box>
                <Box className={classes.boxDataName}>
                  Địa chỉ: {data.address}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </CustomerLayout>
  );
};

const useStyles = makeStyles({
  boxBorder: {
    width: "100%",
    height: "100%",
  },
  boxHeader: {
    width: "100%",
    height: "40px",
    backgroundColor: "#F2F3F5",
    lineHeight: "40px",
    paddingLeft: "20px",
    fontSize: "18px",
  },
  boxBody: {
    margin: "0 auto",
    width: "92%",
    // height: "400px",
    overflow: "auto",
  },
  boxContent: {
    width: "300px",
    margin: "0 auto",
    // display: "flex",
    // flexWrap: "wrap",
    // alignItems: "center",
    // minHeight: "50px",
    // borderBottom: "1px solid rgb(0 0 0 / 0.1)"
  },
  boxImage: {
    width: "300px",
    margin: "0 auto",
  },
  boxImg: {
    width: "300px",
    height: "300px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    margin: "0 auto",
  },
  boxDataName: {
    paddingTop: "5px",
    paddingBottom: "5px",
  },
});

export default memo(InforRestaurant);
