import React, { memo, useState } from "react";
import { makeStyles, Menu, Box, MenuItem, IconButton } from "@material-ui/core";
import PropTypes from "prop-types";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useTranslation } from "react-i18next";
import { uuid } from "../../utils";

const MultipleChoice = ({
  listMenu,
  onChange,
  className,
  defaultValue,
  ...otherProps
}) => {
  const { t: getLabel } = useTranslation();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(
    defaultValue ? defaultValue : 0
  );

  const onClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const onMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    onChange(index);
  };

  const onClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={`${classes.boxRoot} ${className}`}>
      <IconButton
        onClick={onClickListItem}
        classes={{
          root: classes.btnRoot,
          label: `medium-md-txt ${classes.btnLabel}`,
        }}
      >
        {getLabel(listMenu[selectedIndex])}
        <ExpandMoreIcon className={classes.icon} />
      </IconButton>
      <Menu
        keepMounted
        open={Boolean(anchorEl)}
        onClose={onClose}
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        classes={{ list: classes.menuList, paper: classes.menuPaper }}
      >
        {listMenu.map(
          (option, index) =>
            index !== selectedIndex && (
              <MenuItem
                onClick={(event) => onMenuItemClick(event, index)}
                className={`medium-md-txt ${classes.menuItemRoot}`}
                key={uuid()}
              >
                {getLabel(option)}
              </MenuItem>
            )
        )}
      </Menu>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  boxRoot: {
    height: "100%",
  },
  btnRoot: {
    color: theme.palette.grey[800],
    flexDirection: "row",
    alignItems: "center",
    borderRadius: "0%",
    border: `solid 1px ${theme.palette.grey[500]}`,
    height: "100%",
    width: 160,
  },
  btnLabel: {
    justifyContent: "unset",
    fontFamily: theme.typography.fontFamily,
  },
  menuPaper: {
    marginTop: 2,
    borderRadius: 0,
    boxShadow: `0 1px 6px 0 rgba(0, 0, 0, 0.1)`,
    maxHeight: 300,
  },
  menuList: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  menuItemRoot: {
    minHeight: 40,
    width: 160,
    fontSize: 14,
    color: "#9d9fa5",
    border: `solid 1px ${theme.palette.grey[200]}`,
    "&:hover": {
      color: theme.palette.white,
      backgroundColor: theme.palette.grey[700],
    },
    borderBottom: `solid 0.5px ${theme.palette.grey[200]}`,
  },
  icon: {
    right: 15,
    position: "absolute",
    color: theme.palette.grey[500],
  },
}));

MultipleChoice.propTypes = {
  listMenu: PropTypes.array,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

export default memo(MultipleChoice);
