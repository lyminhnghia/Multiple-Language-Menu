import React, { memo } from "react";
import {
  makeStyles,
  Box,
  TablePagination,
  Typography,
} from "@material-ui/core";
import { PaginationItem, Pagination } from "@material-ui/lab";
import { LangConstant } from "../../const";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const PaginationTable = (props) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const { total, page, rowsPerPage, total_page, onChangePage } = props;

  return (
    <Box className={classes.paginationParent}>
      <TablePagination
        classes={{
          root: classes.tablePagination,
          selectRoot: classes.selectRoot,
          toolbar: classes.toolbar,
          caption: classes.caption,
          actions: classes.actions,
        }}
        component="div"
        onChangePage={() => null}
        count={total}
        page={page - 1}
        rowsPerPage={rowsPerPage}
        labelRowsPerPage={``}
        labelDisplayedRows={({ from, to, count }) => (
          <Typography
            variant="body2"
            classes={{ root: classes.paginationTypo, body2: "regular-sm-txt" }}
            component="span"
          >
            {getLabel(LangConstant.FN_PAGINATION)(from, to, count)}
          </Typography>
        )}
      />
      <Pagination
        className={classes.tablePagination}
        count={total_page}
        onChange={onChangePage}
        size="small"
        renderItem={(item) => (
          <PaginationItem
            classes={{
              page: classes.paginationItem,
              selected: classes.selected,
            }}
            {...item}
          />
        )}
      />
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  paginationParent: {
    display: "flex",
    maxWidth: "100%",
    "@media only screen and (max-width: 600px)": {
      display: "inline-block",
    },
  },
  tablePagination: {
    display: "flex",
    textAlign: "center",
    color: theme.palette.grey[600],
  },
  paginationItem: {
    fontSize: 14,
    color: "#000000",
  },
  paginationTypo: {
    marginLeft: 10,
    color: "#000000",
    fontSize: 14,
  },
  selected: {
    color: "#447aff",
    backgroundColor: "unset !important",
  },
  selectRoot: {
    display: "none",
    paddingLeft: 0,
  },
  toolbar: {
    paddingLeft: 0,
  },
  caption: {
    paddingBottom: 4,
  },
  actions: {
    display: "none",
  },
}));

PaginationTable.propTypes = {
  total: PropTypes.number,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  total_page: PropTypes.number,
  onChangePage: PropTypes.func,
};

export default memo(PaginationTable);
