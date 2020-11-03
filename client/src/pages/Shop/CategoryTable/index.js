import React, { memo, useState, useEffect } from "react";
import { LangConstant } from "../../../const";
import { ShopLayout } from "../../../layouts";
import {
  makeStyles,
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { KeyboardArrowDown, KeyboardArrowUp, Delete } from "@material-ui/icons";
import PopupCategory from "./Components/popupCategory";
import PopupProduct from "./Components/popupProduct";
import PopupRemove from "./Components/popupRemove";
import { useDispatch, useSelector } from "react-redux";
import CategoryShopAction from "../../../redux/categoryShop.redux";
import { uuid } from "../../../utils";

const CategoryTable = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const dispatch = useDispatch();
  const [category, setCategory] = useState(null);
  const listCategory = useSelector(
    (state) => state.categoryShopRedux.listCategory
  );
  const isUpdateSuccess = useSelector(
    (state) => state.categoryShopRedux.isUpdateSuccess
  );
  const isRemoveCategory = useSelector(
    (state) => state.categoryShopRedux.isRemoveSuccess
  );
  const isRemoveItem = useSelector(
    (state) => state.itemShopRedux.isRemoveSuccess
  );

  if (listCategory === null) {
    dispatch(CategoryShopAction.getListCategory({}));
  }

  useEffect(() => {
    if (listCategory) {
      setCategory(listCategory);
    }
  }, [listCategory]);

  useEffect(() => {
    if (isUpdateSuccess) {
      dispatch(CategoryShopAction.resetCategory());
      dispatch(CategoryShopAction.getListCategory({}));
    }
  }, [isUpdateSuccess]);

  useEffect(() => {
    if (isRemoveCategory) {
      dispatch(CategoryShopAction.resetCategory());
      dispatch(CategoryShopAction.getListCategory({}));
    }
  }, [isRemoveCategory]);

  useEffect(() => {
    if (isRemoveItem) {
      dispatch(CategoryShopAction.resetCategory());
      dispatch(CategoryShopAction.getListCategory({}));
    }
  }, [isRemoveItem]);

  return (
    <ShopLayout>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table aria-label="collapsible table">
          <TableHead className={classes.tableHeadBox}>
            <TableRow>
              <TableCell />
              <TableCell>{getLabel(LangConstant.TXT_NAME_CATEGORY)}</TableCell>
              <TableCell align="center">
                {getLabel(LangConstant.TXT_AMOUNT_ITEAM)}
              </TableCell>
              <TableCell align="right">
                {getLabel(LangConstant.TXT_DESCRIPTION_CATEGORY)}
              </TableCell>
              <TableCell align="right">
                {getLabel(LangConstant.TXT_EDIT)}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {category &&
              category.map((row, index) => <Row key={uuid()} row={row} />)}
          </TableBody>
        </Table>
      </TableContainer>
    </ShopLayout>
  );
};

const Row = (props) => {
  const { t: getLabel } = useTranslation();
  const { row } = props;
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  return (
    <React.Fragment>
      <TableRow key={row.index} className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="center">{row.items.length}</TableCell>
        <TableCell align="right">{row.description}</TableCell>
        <TableCell align="right">
          <Box display="inline-flex">
            <PopupCategory
              key={row.index}
              id={row.id}
              nameCategory={row.name}
              descriptionCategory={row.description}
            />
            <PopupRemove
              id={row.id}
              title={getLabel(LangConstant.TXT_REMOVE_PRODUCT)}
              codeRemove={true}
            />
          </Box>
        </TableCell>
      </TableRow>
      <TableRow style={{ backgroundColor: "#F2F3F5" }}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow className={classes.root}>
                    <TableCell>{getLabel(LangConstant.TXT_IMAGE)}</TableCell>
                    <TableCell>
                      {getLabel(LangConstant.TXT_NAME_PRODUCT)}
                    </TableCell>
                    <TableCell>
                      {getLabel(LangConstant.TXT_ID_PRODUCT)}
                    </TableCell>
                    <TableCell>
                      {getLabel(LangConstant.TXT_PRICE_PRODUCT)}
                    </TableCell>
                    <TableCell>
                      {getLabel(LangConstant.TXT_DESCRIPTION_PRODUCT)}
                    </TableCell>
                    <TableCell>{getLabel(LangConstant.TXT_EDIT)}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.items.map((item, index) => (
                    <TableRow
                      key={uuid()}
                      className={index % 2 === 0 ? classes.root1 : classes.root}
                    >
                      <TableCell>
                        <img
                          src={item.image_item}
                          style={{ width: "100px", height: "100px" }}
                        ></img>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {item.name}
                      </TableCell>
                      <TableCell>{item.code}</TableCell>
                      <TableCell>{item.price}</TableCell>
                      <TableCell>{item.description}</TableCell>
                      <TableCell>
                        <Box display="inline-flex">
                          <PopupProduct
                            key={uuid()}
                            nameProduct={item.name}
                            IDProduct={item.code}
                            priceProduct={item.price}
                            descriptionProduct={item.description}
                            imgProduct={item.image_item}
                          />
                          <PopupRemove
                            id={item.id}
                            title={getLabel(LangConstant.TXT_REMOVE_ITEM)}
                            codeRemove={false}
                          />
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

const useStyles = makeStyles({
  tableContainer: {
    marginTop: 30,
  },
  boxParent: {
    backgroundColor: "#ff4d4d",
    width: "100vw",
    height: "100vh",
  },
  root: {
    "& > *": {
      borderBottom: "unset",
      color: "#000000",
    },
  },
  root1: {
    "& > *": {
      borderBottom: "unset",
      color: "#ff0000",
    },
  },
  tableHeadBox: {
    backgroundColor: "rgb(48, 92, 139)",
  },
});

export default memo(CategoryTable);
