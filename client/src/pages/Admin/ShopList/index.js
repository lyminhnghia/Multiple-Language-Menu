import React, { memo } from "react";
import {
  makeStyles,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  IconButton,
  Button,
} from "@material-ui/core";
import { MoreHoriz } from "@material-ui/icons";
import { useTranslation } from "react-i18next";
import { AdminLayout } from "../../../layouts";
import {
  CellBody,
  CellHead,
  PaginationTable,
  SearchBar,
  DatePickers,
  BoxButton,
} from "../../../components";
import { uuid } from "../../../utils";
import { LangConstant } from "../../../const";

const ShopList = (props) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  const onChangePage = (event, newPage) => {
    console.log(newPage);
  };

  const onGetDate = (e) => {
    console.log(e.target.value);
  };

  const onSearch = (name) => {
    console.log(name);
  };

  return (
    <AdminLayout>
      <Box>
        <Box style={{ width: "100%", height: 150, backgroundColor: "#f1f3f6" }}>
          <Box style={{ width: "100%", display: "flex", paddingTop: 30 }}>
            <SearchBar
              className={classes.SearchBar}
              placeholder={getLabel(LangConstant.TXT_SEARCH)}
              onKeyUp={onSearch}
            />
            <Box
              style={{
                width: 100,
                height: 30,
                marginLeft: 20,
                marginRight: 0,
              }}
            >
              <BoxButton nameButton="Tim kiem" />
            </Box>
          </Box>
          <Box style={{ textAlign: "center" }}>
            <Box style={{ display: "inline-flex" }}>from</Box>
            <DatePickers
              onChange={onGetDate}
              name="start_date"
              className={classes.findDate}
            />
            <Box style={{ display: "inline-flex", marginLeft: 100 }}>to</Box>
            <DatePickers
              onChange={onGetDate}
              name="end_date"
              className={classes.findDate}
            />
          </Box>
        </Box>
        <TableContainer style={{ marginTop: 50 }}>
          <Table>
            <TableHead>
              <TableRow>
                {LangConstant.ARR_SHOP_LIST.map((data, index) => (
                  <CellHead
                    cellData={getLabel(data)}
                    className={classes.cell}
                    key={uuid()}
                  />
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {dataShop.data.map((data, index) => (
                <TableRow key={uuid()}>
                  <CellBody
                    cellData={data.id}
                    className={classes.cell}
                    key={uuid()}
                  />
                  <CellBody
                    cellData={data.shop_name}
                    className={classes.cell}
                    key={uuid()}
                  />
                  <CellBody
                    cellData={data.owner}
                    className={classes.cell}
                    key={uuid()}
                  />
                  <CellBody
                    cellData={data.address}
                    className={classes.cell}
                    key={uuid()}
                  />
                  <CellBody
                    cellData={data.staff_name}
                    className={classes.cell}
                    key={uuid()}
                  />
                  <CellBody
                    cellData={data.telephone}
                    className={classes.cell}
                    key={uuid()}
                  />
                  <CellBody
                    cellData={data.contract_period}
                    className={classes.cell}
                    key={uuid()}
                  />
                  <CellBody
                    cellData={data.status}
                    className={classes.cell}
                    key={uuid()}
                  />
                  <CellBody
                    cellData={
                      <IconButton className={classes.IconButton}>
                        <MoreHoriz />
                      </IconButton>
                    }
                    className={classes.cell}
                    key={uuid()}
                  />
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <PaginationTable
          total={10}
          page={1}
          rowsPerPage={10}
          total_page={1}
          onChangePage={onChangePage}
        />
      </Box>
    </AdminLayout>
  );
};

const dataShop = {
  data: [],
  page: 1,
  total: 10,
};

for (let i = 1; i < 11; i++) {
  dataShop.data.push({
    id: i,
    shop_name: "shop lmn " + i,
    owner: "Minh Nghia",
    address: "Lang son",
    staff_name: "Ngo Thai Son",
    telephone: "0913098197",
    contract_period: "Lang Son",
    status: 1,
  });
}

const useStyles = makeStyles((theme) => ({
  cell: {
    color: "#000000",
    fontSize: 14,
    border: "1px solid 	#C0C0C0",
  },
  IconButton: {
    padding: 0,
  },
  SearchBar: {
    height: 30,
    width: "auto",
    display: "inline-flex",
    width: "100%",
  },
  findDate: {
    marginTop: 30,
    marginLeft: 30,
  },
}));

export default memo(ShopList);
