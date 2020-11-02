import React, { memo, useState, useEffect } from "react";
import { LangConstant } from "../../../const";
import { makeStyles, Box, Container } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import ButtonBox from "../../../components/buttonBox";
import { AdminLayout } from "../../../layouts";
import { useDispatch, useSelector } from "react-redux";
import AdminAction from "../../../redux/admin.redux";

const ProfileAdmin = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t: getLabel } = useTranslation();
  const dataProfile = useSelector((state) => state.adminRedux.dataProfile);
  const [profile, setProfile] = useState({});

  if (!dataProfile) {
    dispatch(AdminAction.getProfileAdmin());
  }

  useEffect(() => {
    if (dataProfile) {
      setProfile(dataProfile);
    }
  }, [dataProfile]);

  return (
    <AdminLayout>
      <Container className={classes.container}>
        <Box className={classes.boxBorder}>
          <Box className={classes.boxContent}>
            <Box width="35%">
              <Box className={classes.boxParent}>
                <Box>{`${getLabel(LangConstant.TXT_USER_NAME)}:`}</Box>
              </Box>
              <Box className={classes.boxParent}>
                <Box>{`${getLabel(LangConstant.TXT_EMAIL)}:`}</Box>
              </Box>
              <Box className={classes.boxParent}>
                <Box>{`${getLabel(LangConstant.TXT_ROLE)}:`}</Box>
              </Box>
              <Box className={classes.boxParent}>
                <Box>{`${getLabel(LangConstant.TXT_ROLE)}:`}</Box>
              </Box>
            </Box>
            <Box width="65%">
              <Box className={classes.boxParent}>
                <Box className={classes.boxChild}>
                  {profile ? profile.username : ""}
                </Box>
              </Box>
              <Box className={classes.boxParent}>
                <Box className={classes.boxChild}>
                  {profile ? profile.email : ""}
                </Box>
              </Box>
              <Box className={classes.boxParent}>
                <Box className={classes.boxChild}>
                  {getLabel(
                    LangConstant.ARR_ADMIN_ROLE[
                      profile ? (profile.role ? 1 : 0) : 1
                    ]
                  )}
                </Box>
              </Box>
              <Box className={classes.boxParent}>
                <Box className={classes.boxChild}>
                  {getLabel(
                    LangConstant.ARR_ADMIN_STATE[
                      profile ? profile.state - 1 : 0
                    ]
                  )}
                </Box>
              </Box>
            </Box>
            <Box className={classes.boxButton}>
              <ButtonBox
                nameButton={getLabel(LangConstant.TXT_CHANGE_PASS)}
                typeButton="submit"
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </AdminLayout>
  );
};

const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  boxBorder: {
    margin: "0 auto",
    width: 800,
    marginTop: 20,
    marginBottom: 20,
  },
  boxContent: {
    boxShadow: " 0 1px 3px 0 rgba(0,0,0,.2),0 1px 6px 0 rgba(0,0,0,.19)",
    background: "#fff",
    padding: "20px 50px",
    boxSizing: "border-box",
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    borderRadius: 20,
  },
  boxButton: {
    width: 140,
    margin: "0 auto",
    height: 40,
    marginTop: 30,
  },
  boxParent: {
    width: "100%",
    display: "flex",
    marginTop: 20,
    color: "rgb(48, 92, 139)",
    fontSize: 24,
    fontWeight: 500,
    marginLeft: 150,
  },
});

export default memo(ProfileAdmin);
