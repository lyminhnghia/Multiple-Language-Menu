import React, { memo, useState, useEffect } from "react";
import { RestaurantLayout } from "../../../layouts";
import { LangConstant, PathConstant } from "../../../const";
import { makeStyles, Box } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import ButtonBox from "../../../components/buttonBox";
import { useDispatch, useSelector } from "react-redux";
import QRCodeAction from "../../../redux/qrcode.redux";

const QRcodeRestaurant = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t: getLabel } = useTranslation();

  const dataSrc = useSelector((state) => state.qrCodeRedux.dataGet);
  const create = useSelector((state) => state.qrCodeRedux.dataCreate);

  const [changeSize, setChangeSize] = useState({
    buttonSmall: false,
    buttonMiddle: true,
    buttonLarge: false,
  });

  const [imageSrc, setImageSrc] = useState("");

  if (dataSrc === null) {
    dispatch(QRCodeAction.getQrCode({}));
  }

  const onChange = (e) => {
    if (e === "1") {
      setChangeSize({
        buttonSmall: true,
        buttonMiddle: false,
        buttonLarge: false,
      });
    } else if (e === "2") {
      setChangeSize({
        buttonSmall: false,
        buttonMiddle: true,
        buttonLarge: false,
      });
    } else if (e === "3") {
      setChangeSize({
        buttonSmall: false,
        buttonMiddle: false,
        buttonLarge: true,
      });
    }
  };

  const onCreateQR = () => {
    dispatch(
      QRCodeAction.createQrCode({
        url: PathConstant.ROOT_URL + PathConstant.CUSTOMER_CATEGORY,
      })
    );
  };

  useEffect(() => {
    if (dataSrc && dataSrc.url) {
      setImageSrc(dataSrc.url);
    }
  }, [dataSrc]);

  useEffect(() => {
    if (create) {
      setImageSrc(create);
    }
  }, [create]);

  return (
    <RestaurantLayout>
      <Box className={classes.boxParent}>
        <Box className={classes.boxBody}>
          {!imageSrc ? (
            <Box style={{ textAlign: "center" }}>
              <Box className={classes.boxP}>
                Bạn chưa có mã QR hãy tạo mã QR mới
              </Box>
              <ButtonBox
                className={classes.buttonCreate}
                nameButton={getLabel(LangConstant.TXT_CREATED)}
                onClick={(e) => onCreateQR()}
              />
            </Box>
          ) : (
            <>
              <Box className={classes.boxP}>Tải mã QR</Box>
              <Box className={classes.boxImg}>
                <img
                  src={imageSrc}
                  style={{
                    display: changeSize.buttonSmall ? "block" : "none",
                    width: "200px",
                    height: "200px",
                  }}
                />
                <img
                  src={imageSrc}
                  style={{
                    display: changeSize.buttonMiddle ? "block" : "none",
                    width: "300px",
                    height: "300px",
                  }}
                />
                <img
                  src={imageSrc}
                  style={{
                    display: changeSize.buttonLarge ? "block" : "none",
                    width: "400px",
                    height: "400px",
                  }}
                />
              </Box>
              <Box className={classes.boxPButton}>
                <Box
                  className={`${classes.boxButton} ${
                    changeSize.buttonSmall ? classes.boxChange : ""
                  }`}
                >
                  <ButtonBox
                    nameButton={getLabel(LangConstant.TXT_SMALL)}
                    onClick={(e) => onChange("1")}
                  ></ButtonBox>
                </Box>
                <Box
                  className={`${classes.boxButton} ${
                    changeSize.buttonMiddle ? classes.boxChange : ""
                  }`}
                >
                  <ButtonBox
                    nameButton={getLabel(LangConstant.TXT_MIDDLE)}
                    onClick={(e) => onChange("2")}
                  ></ButtonBox>
                </Box>
                <Box
                  className={`${classes.boxButton} ${
                    changeSize.buttonLarge ? classes.boxChange : ""
                  }`}
                >
                  <ButtonBox
                    nameButton={getLabel(LangConstant.TXT_LARGE)}
                    onClick={(e) => onChange("3")}
                  ></ButtonBox>
                </Box>
              </Box>
              <Box className={classes.boxButton1}>
                <ButtonBox nameButton={getLabel(LangConstant.TXT_DOWNLOAD)} />
              </Box>
            </>
          )}
        </Box>
      </Box>
    </RestaurantLayout>
  );
};

const useStyles = makeStyles({
  boxParent: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F3F5",
  },
  boxBody: {
    width: "800px",
  },
  boxPButton: {
    display: "flex",
    justifyContent: "center",
  },
  boxButton: {
    height: "40px",
    height: "40px",
    width: "100px",
    margin: "5px",
  },
  boxImg: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "410px",
  },
  boxChange: {
    "& .MuiButtonBase-root": {
      backgroundColor: "#1a334d",
    },
  },
  boxP: {
    textAlign: "center",
    fontSize: 24,
  },
  boxButton1: {
    width: "140px",
    margin: "0 auto",
    height: "40px",
    marginTop: "20px",
  },
  buttonCreate: {
    width: 150,
    height: 40,
    marginTop: 50,
  },
});

export default memo(QRcodeRestaurant);
