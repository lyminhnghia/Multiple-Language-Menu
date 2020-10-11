import React, { memo } from "react";
import { makeStyles, Paper, Container, Box, TableContainer, Table, TableHead, TableBody, TableRow } from "@material-ui/core"
import { useTranslation } from "react-i18next"
import { AdminLayout } from "../../../layouts"
import { CellBody, CellHead } from "../../../components"
import { uuid } from "../../../utils"

const ShopList = props => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();


  return (
    <AdminLayout>
      <Paper elevation={1} square className={classes.rootPaper}>
        <Container>
          <Box>
            <TableContainer>
              <Table>
                <TableRow>
                  <CellHead cellData='nghia' className={classes.cell} key={uuid()} />
                </TableRow>
              </Table>
            </TableContainer>
          </Box>
        </Container>
      </Paper>
    </AdminLayout>
  )
};

const useStyles = makeStyles(theme => ({
  rootPaper: {
    width: "100%",
    height: "100%"
  },
  cell: {
    color: "black"
  }
}));

export default memo(ShopList);
