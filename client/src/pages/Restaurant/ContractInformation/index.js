import React, { memo, useState, useEffect } from "react";
import { AppConstant, LangConstant } from "../../../const";
import { RestaurantLayout } from "../../../layouts";
import { makeStyles, Box } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import LabelContract from "./Components/labelContract";
import { useDispatch, useSelector } from "react-redux";
import RestaurantInfoAction from "../../../redux/restaurantInfo.redux";
import moment from "moment";

const ContractInformation = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const dispatch = useDispatch();
  const contract = useSelector((state) => state.restaurantInfoRedux.contract);
  const [data, setData] = useState({});

  if (contract === null) {
    dispatch(RestaurantInfoAction.getContract({}));
  }

  useEffect(() => {
    if (contract) {
      setData(contract);
    }
  }, [contract]);
  return (
    <RestaurantLayout>
      <Box className={classes.boxParent}>
        <Box className={classes.boxHeader}> Thông tin hợp đồng </Box>
        <Box className={classes.boxBody}>
          <LabelContract
            nameLabel={getLabel(LangConstant.TXT_RESTAURANT_NAME)}
            valueLabel={data.restaurant_name ? data.restaurant_name : ""}
          />
          <LabelContract
            nameLabel={getLabel(LangConstant.TXT_CONTRACT_PERIOD)}
            valueLabel={
              data.restaurant_name
                ? moment(new Date(data.end_contract * 1000)).format(
                    AppConstant.FM_DD_MM_YYYY
                  )
                : ""
            }
          />
          <LabelContract
            nameLabel={getLabel(LangConstant.TXT_USER_NAME)}
            valueLabel={data.account ? data.account.username : ""}
          />
          <LabelContract
            nameLabel={getLabel(LangConstant.TXT_COMPANY_NAME)}
            valueLabel={data.owner ? data.owner.company_name : ""}
          />
          <LabelContract
            nameLabel={getLabel(LangConstant.TXT_ADDRESS)}
            valueLabel={data.owner ? data.owner.address : ""}
          />
          <LabelContract
            nameLabel={getLabel(LangConstant.TXT_TELEPHONE)}
            valueLabel={data.owner ? data.owner.telephone : ""}
          />
          <LabelContract
            nameLabel={getLabel(LangConstant.TXT_OWNER)}
            valueLabel={data.owner ? data.owner.staff_name : ""}
          />
          <LabelContract
            nameLabel={getLabel(LangConstant.TXT_EMAIL)}
            valueLabel={data.owner ? data.owner.email : ""}
          />
        </Box>
      </Box>
    </RestaurantLayout>
  );
};

const useStyles = makeStyles({
  boxParent: {
    width: "100%",
    height: "100%",
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
