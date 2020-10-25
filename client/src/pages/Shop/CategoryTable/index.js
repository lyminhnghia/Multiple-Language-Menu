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
import ButtonIcon from "./Components/buttonIcon";

const  createData = (nameCategory, total, description)=> {
  return {
    nameCategory,
    total,
    description,
    category: [
      { nameIteam: 'Hảo hảo', itemId: '11091700', price: 30000, descriptionIteam: "chó Nghĩa" },
      { nameIteam: 'jummy', itemId: 'Anonymous', price: 10000, descriptionIteam: "nhân tạo" },
      { nameIteam: 'harri', itemId: 'HarriXCIX', price: 10000000, descriptionIteam: "hoàn toàn thiên nhiên"  },
    ],
  };
}
  
function Row(props) {
  const { t: getLabel} = useTranslation();
  const { row } = props;
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const onChangeCategory = () =>{
    console.log("1234")
  }
  const onChange = () =>{
    console.log("hihi")
  }
  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.nameCategory}
        </TableCell>
        <TableCell align="center">
          {row.total}
        </TableCell>
        <TableCell align="right">
          {row.description}
        </TableCell>
        <TableCell align="right">
          <ButtonIcon onClick={onChangeCategory}/>
        </TableCell>
        {/* <TableCell align="right">{row.protein}</TableCell> */}
      </TableRow>
      <TableRow style={{backgroundColor:"#F2F3F5"}}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow className={classes.root}>
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
                      {getLabel(LangConstant.TXT_IMAGE)}
                    </TableCell>
                    <TableCell>
                      {getLabel(LangConstant.TXT_DESCRIPTION_PRODUCT)}
                    </TableCell>
                    <TableCell>
                      {getLabel(LangConstant.TXT_EDIT)}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.category.map((categoryRow,index) => (
                    <TableRow key={categoryRow.date} className={index % 2 === 0 ? classes.root1 : classes.root} >
                      <TableCell component="th" scope="row">
                        {categoryRow.nameIteam}
                      </TableCell>
                      <TableCell>
                        {categoryRow.itemId}
                      </TableCell>
                      <TableCell >
                        {categoryRow.price}
                      </TableCell>
                      <TableCell>
                        <img src="" style={{width:"100px",height:"100px"}}></img>
                      </TableCell>
                      <TableCell >
                        {categoryRow.descriptionIteam}
                      </TableCell>
                      <TableCell>
                        <ButtonIcon onClick={onChange} />
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

const rows = [
  createData('Đồ ăn', 159, "đây là đồ ăn"),
  createData('Đồ uống', 237, "đây là đồ uống"),
  createData('Nước ép', 262, "đây là nước ép"),
  createData('Mỳ Tôm', 305, "đây là mỳ tôm"),
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
            <TableCell>
              {getLabel(LangConstant.TXT_NAME_CATEGORY)}
            </TableCell>
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
          {rows.map((row,index) => (
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
