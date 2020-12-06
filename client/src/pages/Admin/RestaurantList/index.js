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
  Dialog,
} from "@material-ui/core";
import { Settings, Delete } from "@material-ui/icons";
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
import { LangConstant, AppConstant } from "../../../const";
import { useDispatch, useSelector } from "react-redux";
import AdminAction from "../../../redux/admin.redux";
import EditRestaurant from "./component/EditRestaurant";
import DeleteRestaurant from "./component/DeleteRestaurant";
import moment from "moment";

const RestaurantList = (props) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const [filter, setFilter] = useState("");
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const dataRestaurant = useSelector((state) => state.adminRedux.data);
  const dataGet = useSelector((state) => state.adminRedux.dataGet);
  const isDelete = useSelector((state) => state.adminRedux.isDeleteSuccess);
  const isUpdate = useSelector((state) => state.adminRedux.isUpdateSuccess);
  const [restaurant, setRestaurant] = useState([]);
  const [total, setTotal] = useState(0);
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [id, setId] = useState(0);

  if (dataRestaurant === null) {
    dispatch(AdminAction.getListRestaurant({ page: 1 }));
  }

  const onChangePage = (event, newPage) => {
    setPage(newPage);
    dispatch(
      AdminAction.getListRestaurant({
        page: newPage,
        from: from,
        to: to,
        filter: filter,
      })
    );
  };

  const onGetDateFrom = (e) => {
    let current = new Date(e.target.value);
    let from = handleTime(current);
    setFrom(from);
  };

  const onGetDateTo = (e) => {
    let current = new Date(e.target.value);
    let to = handleTime(current);
    setTo(to);
  };

  const onSearch = (name) => {
    setFilter(name);
  };

  const onSubmit = () => {
    dispatch(
      AdminAction.getListRestaurant({
        page: 1,
        from: from,
        to: to,
        filter: filter,
      })
    );
  };

  const onOpenRestaurant = (restaurantId) => {
    dispatch(AdminAction.getRestaurant({ id: restaurantId }));
    setId(restaurantId);
  };

  const onDeleteRestaurant = (restaurantId) => {
    setOpenDelete(true);
    setId(restaurantId);
  };

  const handleTime = (time) => {
    let result =
      Math.floor(new Date(time).getTime() / 1000) -
      time.getHours() * 60 * 60 -
      time.getMinutes() * 60 -
      time.getSeconds();
    return result;
  };

  useEffect(() => {
    if (dataRestaurant) {
      if (dataRestaurant.data) {
        setRestaurant(dataRestaurant.data);
      }
      if (dataRestaurant.total) {
        setTotal(dataRestaurant.total);
      }
    }
  }, [dataRestaurant]);

  useEffect(() => {
    if (isUpdate) {
      dispatch(AdminAction.resetAdmin());
      dispatch(AdminAction.getListRestaurant({ page: 1 }));
    }
  }, [isUpdate]);

  useEffect(() => {
    if (isDelete) {
      dispatch(AdminAction.resetAdmin());
      dispatch(AdminAction.getListRestaurant({ page: 1 }));
    }
  }, [isDelete]);

  useEffect(() => {
    if (dataGet && !open) {
      setOpen(true);
    }
  }, [dataGet]);

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
                {LangConstant.ARR_RESTAURANT_LIST.map((data, index) => (
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
                      cellData={data.restaurant_name}
                      className={classes.cell}
                      key={uuid()}
                    />
                    <CellBody
                      cellData={data.owner.company_name}
                      className={classes.cell}
                      key={uuid()}
                    />
                    <CellBody
                      cellData={data.owner.address}
                      className={classes.cell}
                      key={uuid()}
                    />
                    <CellBody
                      cellData={data.owner.staff_name}
                      className={classes.cell}
                      key={uuid()}
                    />
                    <CellBody
                      cellData={data.owner.telephone}
                      className={classes.cell}
                      key={uuid()}
                    />
                    <CellBody
                      cellData={moment(
                        new Date(data.end_contract * 1000)
                      ).format(AppConstant.FM_DD_MM_YYYY)}
                      className={classes.cell}
                      key={uuid()}
                    />
                    <CellBody
                      cellData={getLabel(
                        LangConstant.ARR_ADMIN_STATE[data.account.state - 1]
                      )}
                      className={
                        data.account.state - 1 !== 0
                          ? classes.colorCell
                          : classes.cell
                      }
                      key={uuid()}
                    />
                    <CellBody
                      cellData={
                        <Box className={classes.box7}>
                          <IconButton
                            onClick={() => onOpenRestaurant(data.id)}
                            className={classes.IconButtonEdit}
                          >
                            <Settings />
                          </IconButton>
                          <IconButton
                            onClick={() => onDeleteRestaurant(data.id)}
                            className={classes.IconButtonDelete}
                          >
                            <Delete />
                          </IconButton>
                        </Box>
                      }
                      className={classes.cell}
                      key={uuid()}
                    />
                  </TableRow>
                ))}
            </TableBody>
            <Dialog fullScreen open={open}>
              <EditRestaurant id={id} setOpen={setOpen} data={dataGet} />
            </Dialog>
            <Dialog open={openDelete}>
              <DeleteRestaurant
                id={id}
                setOpen={setOpenDelete}
                title={getLabel(LangConstant.TXT_REMOVE_ITEM)}
              />
            </Dialog>
          </Table>
        </TableContainer>
        {(total || total === 0) && (
          <PaginationTable
            total={total}
            page={page}
            rowsPerPage={10}
            total_page={parseInt((total - 1) / 10) + 1}
            onChangePage={onChangePage}
          />
        )}
      </Box>
    </AdminLayout>
  );
};

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
    fontSize: 20,
  },
  box6: {
    display: "inline-flex",
    marginLeft: 100,
    fontSize: 20,
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
  findDate: {
    marginTop: 30,
    marginLeft: 30,
  },
}));

export default memo(RestaurantList);
