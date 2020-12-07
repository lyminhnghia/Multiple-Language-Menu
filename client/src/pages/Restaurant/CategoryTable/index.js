import React, { memo, useState, useEffect } from "react";
import { LangConstant } from "../../../const";
import { RestaurantLayout } from "../../../layouts";
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
  Dialog,
} from "@material-ui/core";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
import {
  PopupCategory,
  PopupProduct,
  PopupRemove,
  AddProduct,
} from "./Components";
import { BoxButton, MultipleChoice } from "../../../components";
import { useDispatch, useSelector } from "react-redux";
import CategoryRestaurantAction from "../../../redux/categoryRestaurant.redux";
import ItemRestaurantAction from "../../../redux/itemRestaurant.redux";
import { uuid } from "../../../utils";
import { useTranslation } from "react-i18next";

const CategoryTable = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const dispatch = useDispatch();

  const [openAdd, setOpenAdd] = useState(false);
  const [category, setCategory] = useState(null);

  const listCategory = useSelector(
    (state) => state.categoryRestaurantRedux.listCategory
  );
  const isUpdateCategory = useSelector(
    (state) => state.categoryRestaurantRedux.isUpdateSuccess
  );
  const isRemoveCategory = useSelector(
    (state) => state.categoryRestaurantRedux.isRemoveSuccess
  );
  const isCreateItem = useSelector(
    (state) => state.itemRestaurantRedux.isCreateSuccess
  );
  const isUpdateItem = useSelector(
    (state) => state.itemRestaurantRedux.isUpdateSuccess
  );
  const isRemoveItem = useSelector(
    (state) => state.itemRestaurantRedux.isRemoveSuccess
  );

  if (listCategory === null) {
    dispatch(CategoryRestaurantAction.getListCategory({}));
  }

  const onClose = () => {
    setOpenAdd(false);
  };

  useEffect(() => {
    if (listCategory) {
      setCategory(listCategory);
    }
  }, [listCategory]);

  useEffect(() => {
    if (isUpdateCategory || isRemoveCategory) {
      dispatch(CategoryRestaurantAction.resetCategory());
      dispatch(CategoryRestaurantAction.getListCategory({}));
    }
  }, [isUpdateCategory, isRemoveCategory]);

  useEffect(() => {
    if (isCreateItem || isUpdateItem || isRemoveItem) {
      dispatch(ItemRestaurantAction.resetItem());
      dispatch(CategoryRestaurantAction.getListCategory({}));
    }
  }, [isCreateItem, isUpdateItem, isRemoveItem]);

  return (
    <RestaurantLayout>
      <Box style={{ padding: "0 20px" }}>
        <Box
          style={{
            display: "flex",
            justifyContent: "flex-end",
            margin: "10px 0",
          }}
        >
          <MultipleChoice
            // className={classes.multipleChoice}
            listMenu={LangConstant.ARR_ADMIN_STATE}
            // defaultValue={formChange.state - 1}
            // onChange={onChangeChoice}
          />
          <Box style={{ width: 140, height: 40, marginLeft: 30 }}>
            <BoxButton
              nameButton={getLabel(LangConstant.TXT_ADD_ITEM)}
              onClick={() => setOpenAdd(true)}
            />
          </Box>
        </Box>
        <Dialog open={openAdd} fullScreen>
          <AddProduct onClose={onClose} />
        </Dialog>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead className={classes.tableHeadBox}>
              <TableRow>
                <TableCell />
                <TableCell>
                  {getLabel(LangConstant.TXT_NAME_CATEGORY)}
                </TableCell>
                <TableCell align="center">
                  {getLabel(LangConstant.TXT_AMOUNT_ITEM)}
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
                category.map((row, index) => (
                  <Row key={uuid()} category={category} row={row} />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </RestaurantLayout>
  );
};

const Row = (props) => {
  const { t: getLabel } = useTranslation();
  const { row, category } = props;
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  return (
    <>
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
                      <TableCell>
                        {item.price + " " + item.currency_unit}
                      </TableCell>
                      <TableCell>{item.description}</TableCell>
                      <TableCell>
                        <Box display="inline-flex">
                          <PopupProduct
                            key={uuid()}
                            data={item}
                            categoryProduct={category}
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
    </>
  );
};

const useStyles = makeStyles({
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
