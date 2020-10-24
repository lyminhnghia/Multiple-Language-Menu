import React, { memo, useState } from "react";
import { LangConstant } from "../../../const";
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
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const  createData = (name, calories, fat, carbs, protein, price)=> {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    category: [
      { date: '2020-01-05', customerId: '11091700', amount: 3 },
      { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
      { date: '2020-01-02', customerId: 'Anonymous1', amount: 1 },
    ],
  };
}
  
function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        {/* <TableCell align="right">{row.protein}</TableCell> */}
      </TableRow>
      <TableRow style={{backgroundColor:"#F2F3F5"}}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow className={classes.root}>
                    <TableCell>Tên</TableCell>
                    <TableCell>Mã</TableCell>
                    <TableCell>Giá</TableCell>
                    <TableCell>Mô tả sản phẩm</TableCell>
                    {/* <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.category.map((categoryRow,index) => (
                    <TableRow key={categoryRow.date} className={index % 2 === 0 ? classes.root1 : classes.root} >
                      <TableCell component="th" scope="row">
                        {categoryRow.date}
                      </TableCell>
                      <TableCell>{categoryRow.customerId}</TableCell>
                      <TableCell >{categoryRow.amount}</TableCell>
                      <TableCell>
                        <img src="" style={{width:"100px",height:"100px"}}></img>
                      </TableCell>
                      <TableCell >
                        {Math.round(categoryRow.amount * row.price * 100) / 100}
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
}
  
//   Row.propTypes = {
//     row: PropTypes.shape({
//       calories: PropTypes.number.isRequired,
//       carbs: PropTypes.number.isRequired,
//       fat: PropTypes.number.isRequired,
//       category: PropTypes.arrayOf(
//         PropTypes.shape({
//           amount: PropTypes.number.isRequired,
//           customerId: PropTypes.string.isRequired,
//           date: PropTypes.string.isRequired,
//         }),
//       ).isRequired,
//       name: PropTypes.string.isRequired,
//       price: PropTypes.number.isRequired,
//       protein: PropTypes.number.isRequired,
//     }).isRequired,
//   };
  
const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];
  
const CategoryTable = () => {
  const classes = useStyles();
  const { t: getLabel} = useTranslation();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead className={classes.tableHeadBox}>
          <TableRow>
            <TableCell />
            <TableCell>TÊN DANH MỤC</TableCell>
            <TableCell align="right">SỐ LƯỢNG</TableCell>
            <TableCell align="right">MÔ TẢ</TableCell>
            <TableCell align="right">CHỈNH SỬA</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};


const useStyles = makeStyles({
    boxParent: {
        backgroundColor: "#ff4d4d",
        width: "100vw",
        height: "100vh",
    },
    root: {
        '& > *': {
            borderBottom: 'unset',
            color: "#000000"
        },
    },
    root1: {
        '& > *': {
            borderBottom: 'unset',
            color: "#ff0000"
        },
    },
    tableHeadBox: {
        backgroundColor: "rgb(48, 92, 139)"
    }
});

export default memo(CategoryTable);
