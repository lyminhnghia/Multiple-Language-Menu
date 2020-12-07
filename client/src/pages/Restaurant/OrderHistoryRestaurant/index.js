import React, { memo, useState } from "react";
import { LangConstant } from "../../../const";
import {
  CellBody,
  CellHead,
  PaginationTable,
  SearchBar,
  DatePickers,
  BoxButton,
  MultipleChoice,
} from "../../../components";
import { RestaurantLayout } from "../../../layouts";
import {
  makeStyles,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  IconButton,
  Dialog,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { uuid } from "../../../utils";

const OrderHistory = (props) => {
  const { t: getLabel } = useTranslation();
  const classes = useStyles();

  return (
    <RestaurantLayout>
      <Box>
        <Box className={classes.box1}>
          <Box className={classes.box2}>
            <SearchBar
              className={classes.SearchBar}
              placeholder={getLabel(LangConstant.TXT_SEARCH)}
              // onChange={onSearch}
            />
            <Box className={classes.box3}>
              <BoxButton
                // onClick={onSubmit}
                nameButton={getLabel(LangConstant.TXT_SEARCH)}
              />
            </Box>
          </Box>
        </Box>
        <TableContainer className={classes.containerTable}>
          <Table>
            <TableHead>
              <TableRow>
                {LangConstant.ARR_HISTORY_BOOKING.map((data, index) => (
                  <CellHead
                    cellData={getLabel(data)}
                    className={classes.cell}
                    key={uuid()}
                  />
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {restaurant &&
                restaurant.map((data, index) => (
                  <TableRow key={uuid()}>
                    <CellBody
                      cellData={data.id}
                      className={classes.cell}
                      key={uuid()}
                    />
                    <CellBody
                      cellData={data.table}
                      className={classes.cell}
                      key={uuid()}
                    />
                    <CellBody
                      cellData={data.time}
                      className={classes.cell}
                      key={uuid()}
                    />
                    <CellBody
                      cellData={data.category}
                      className={classes.cell}
                      key={uuid()}
                    />
                    <CellBody
                      cellData={data.item}
                      className={classes.cell}
                      key={uuid()}
                    />
                    <CellBody
                      cellData={data.amount}
                      className={classes.cell}
                      key={uuid()}
                    />
                    <CellBody
                      cellData={
                        <MultipleChoice
                          className={classes.multipleChoice}
                          listMenu={LangConstant.ARR_RESTAURANT_STATE}
                          defaultValue={data.status}
                          // onChange={onChangeChoice}
                        />
                      }
                      className={classes.cell}
                      key={uuid()}
                    />
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        {(total || total === 0) && (
          <PaginationTable
            total={total}
            page={1}
            rowsPerPage={10}
            total_page={parseInt((total - 1) / 10) + 1}
            // onChangePage={onChangePage}
          />
        )}
      </Box>
    </RestaurantLayout>
  );
};
const total = 2;
const restaurant = [
  {
    id: 1,
    table: "C3",
    time: "19:23",
    category: "Thịt heo",
    item: "Thịt heo quay",
    amount: 3,
    status: 0,
  },
  {
    id: 1,
    table: "C3",
    time: "19:23",
    category: "Thịt heo",
    item: "Thịt heo hầm",
    amount: 1,
    status: 0,
  },
];

const useStyles = makeStyles((theme) => ({
  box1: {
    width: "100%",
    height: 100,
    backgroundColor: "#f1f3f6",
  },
  box2: {
    width: "100%",
    display: "flex",
    paddingTop: 30,
  },
  box3: {
    width: 100,
    height: 30,
    marginLeft: 20,
    marginRight: 0,
  },
  box7: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
  },
  containerTable: {
    marginTop: 20,
    minHeight: 420,
  },
  cell: {
    color: "#000000",
    fontSize: 14,
    border: "1px solid 	#C0C0C0",
  },
  colorCell: {
    color: "red",
    fontSize: 14,
    border: "1px solid 	#C0C0C0",
  },
  IconButtonEdit: {
    padding: 0,
    color: "#305C8B",
  },
  IconButtonDelete: {
    padding: 0,
    marginLeft: 10,
    color: "#305C8B",
  },
  SearchBar: {
    height: 30,
    width: "auto",
    display: "inline-flex",
    width: "100%",
  },
  multipleChoice: {
    marginLeft: 30,
    height: 40,
  },
}));
export default memo(OrderHistory);
