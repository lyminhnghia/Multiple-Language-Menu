import React, { memo } from "react";
import { Link } from "react-router-dom";
import { makeStyles, Box } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { AppConstant } from "../../../../const";
import CustomerAction from "../../../../redux/customer.redux";
import Cookie from "js-cookie";

const ListCategory = ({ restaurantId }) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const dispatch = useDispatch();
  const langCode = Cookie.get(AppConstant.KEY_LANG);

  const dataCategory = useSelector((state) => state.customerRedux.category);

  if (dataCategory === null) {
    dispatch(
      CustomerAction.getListCategoryCustomer({
        restaurantId: restaurantId,
        lang_code: langCode,
      })
    );
  }

  return (
    <Box>
      <Box className={classes.boxHeader}>Danh mục món ăn</Box>
      <Box className={classes.boxPara}>
        {dataCategory &&
          dataCategory.map((category, index) => (
            <Box key={"cate" + index} className={classes.boxBorder}>
              <Box className={classes.boxContent}>
                <Link
                  to={`/${restaurantId}/categories/${category.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                  onClick={() =>
                    dispatch(
                      CustomerAction.getListItemCustomer({
                        categoryId: category.id,
                      })
                    )
                  }
                >
                  <Box style={{ fontSize: "18px", fontWeight: "500" }}>
                    {category.name}
                  </Box>
                  <Box>
                    {category.item_languages
                      ? category.item_languages.length
                      : 0}
                  </Box>
                </Link>
              </Box>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

const useStyles = makeStyles({
  boxHeader: {
    width: "100%",
    height: "40px",
    backgroundColor: "#F2F3F5",
    lineHeight: "40px",
    paddingLeft: "4%",
    fontSize: "18px",
  },
  boxPara: {
    width: "92%",
    margin: "0 auto",
  },
  boxBorder: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    borderBottom: "1px solid rgb(0 0 0 / 0.1)",
  },
  boxContent: {
    padding: "10px 0px",
    width: "100%",
  },
});

export default memo(ListCategory);
