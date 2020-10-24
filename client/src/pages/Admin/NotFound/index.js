import React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import { AdminLayout } from "../../../layouts";

const AdminNotFound = () => {
  const classes = useStyles();

  return (
    <AdminLayout className={classes.root}>
      <Grid container justify="center" spacing={4}>
        <Grid item lg={6} xs={12}>
          <div className={classes.content}>
            <Typography variant="h1" color="primary">
              404: The page you are looking for isn’t here
            </Typography>
            <Typography
              variant="subtitle2"
              color="primary"
              className={classes.typoContent}
            >
              You either tried some shady route or you came here by mistake.
              Whichever it is, try using the navigation
            </Typography>
          </div>
        </Grid>
      </Grid>
    </AdminLayout>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  content: {
    paddingTop: 150,
    textAlign: "center",
  },
  typoContent: {
    marginTop: 50,
  },
}));

export default AdminNotFound;
