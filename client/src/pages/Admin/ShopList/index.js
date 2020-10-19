import React, { memo, useState, useEffect } from "react";
import {
  makeStyles,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  IconButton,
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
import { useDispatch, useSelector } from "react-redux";
import AdminAction from "../../../redux/admin.redux";

const ShopList = (props) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const [filter, setFilter] = useState("");
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.adminRedux.data);

  if (data === null) {
    dispatch(AdminAction.getListShop({ page: 1 }));
  }

  const onChangePage = (event, newPage) => {
    setPage(1);
  };

  const onGetDateFrom = (e) => {
    setFrom(e.target.value);
  };

  const onGetDateTo = (e) => {
    setTo(e.target.value);
  };

  const onSearch = (name) => {
    setFilter(name);
  };

  const onSubmit = () => {
    console.log(from, to, filter);
  };

  return (
    <AdminLayout>
      <Box>
        <Box className={classes.box1}>
          <Box className={classes.box2}>
            <SearchBar
              className={classes.SearchBar}
              placeholder={getLabel(LangConstant.TXT_SEARCH)}
              onChange={onSearch}
            />
            <Box className={classes.box3}>
              <BoxButton
                onClick={onSubmit}
                nameButton={getLabel(LangConstant.TXT_SEARCH)}
              />
            </Box>
          </Box>
          <Box className={classes.box4}>
            <Box className={classes.box5}>
              {getLabel(LangConstant.TXT_FROM)}
            </Box>
            <DatePickers
              onChange={onGetDateFrom}
              name="start_date"
              className={classes.findDate}
            />
            <Box className={classes.box6}>{getLabel(LangConstant.TXT_TO)}</Box>
            <DatePickers
              onChange={onGetDateTo}
              name="end_date"
              className={classes.findDate}
            />
          </Box>
        </Box>
        <TableContainer className={classes.containerTable}>
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
  box1: {
    width: "100%",
    height: 150,
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
  box4: {
    textAlign: "center",
  },
  box5: {
    display: "inline-flex",
  },
  box6: {
    display: "inline-flex",
    marginLeft: 100,
  },
  containerTable: {
    marginTop: 50,
  },
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
