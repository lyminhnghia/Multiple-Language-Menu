import React, { memo, useState, useEffect } from "react";
import { AppConstant } from "../../../const";
import { ShopLayout } from "../../../layouts";
import { makeStyles, Box } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import LabelContract from "./Components/labelContract";
import { useDispatch, useSelector } from "react-redux";
import ShopInfoAction from "../../../redux/shopInfo.redux";
import moment from "moment";

const ContractInformation = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const dispatch = useDispatch();
  const contract = useSelector((state) => state.shopInfoRedux.contract);
  const [data, setData] = useState({});

  if (contract === null) {
    dispatch(ShopInfoAction.getContract({}));
  }

  useEffect(() => {
    if (contract) {
      setData(contract);
    }
  }, [contract]);

  const rows = [
    { name: "Tên cửa hàng", value: "Fastfood" },
    { name: "Thời gian hết hạn", value: "20-5-2020" },
    { name: "Tài khoản", value: "215100002313213" },
    { name: "Tên công ty", value: "Công ty UET" },
    { name: "địa chỉ", value: "Nhà E3 - Đại học Công Nghệ-ĐHQGHN" },
    { name: "số điện thoại", value: "092148245" },
    { name: "tên nhân viên", value: "1231234" },
    { name: "email", value: "1234@vnu.edu.vn" },
  ];
  return (
    <ShopLayout>
      <Box className={classes.boxParent}>
        <Box className={classes.boxHeader}> Thông tin hợp đồng </Box>
        <Box className={classes.boxBody}>
          <LabelContract
            nameLabel={rows[0].name}
            valueLabel={data.shop_name ? data.shop_name : ""}
          />
          <LabelContract
            nameLabel={rows[1].name}
            valueLabel={
              data.shop_name
                ? moment(new Date(data.end_contract * 1000)).format(
                    AppConstant.FM_DD_MM_YYYY
                  )
                : ""
            }
          />
          <LabelContract
            nameLabel={rows[2].name}
            valueLabel={data.account ? data.account.username : ""}
          />
          <LabelContract
            nameLabel={rows[3].name}
            valueLabel={data.owner ? data.owner.company_name : ""}
          />
          <LabelContract
            nameLabel={rows[4].name}
            valueLabel={data.owner ? data.owner.address : ""}
          />
          <LabelContract
            nameLabel={rows[5].name}
            valueLabel={data.owner ? data.owner.telephone : ""}
          />
          <LabelContract
            nameLabel={rows[6].name}
            valueLabel={data.owner ? data.owner.staff_name : ""}
          />
          <LabelContract
            nameLabel={rows[7].name}
            valueLabel={data.owner ? data.owner.email : ""}
          />
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
    margin: "0 auto",
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
  },
});

export default memo(ContractInformation);
