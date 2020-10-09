import React, { memo, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Inbox, Mail } from "@material-ui/icons";
import { LangConstant } from "../../const";
import { Sidebar } from "../../components";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const AdminLayout = (props) => {
  const { children } = props;
  const { t: getLabel } = useTranslation();
  const classes = useStyles();
  const listSidebar = [
    { content: "Inbox", icon: <Mail /> },
    { content: "Starred", icon: <Inbox /> },
    { content: "Send email", icon: <Mail /> },
    { content: "Drafts", icon: <Inbox /> },
  ];
  return <Sidebar listSidebar={listSidebar} children={children} />;
};

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({}));

AdminLayout.propTypes = {
  children: PropTypes.node,
};

export default memo(AdminLayout);
