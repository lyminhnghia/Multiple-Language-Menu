import React, { memo } from "react";
import PropTypes from "prop-types";
import {
  makeStyles,
  ListItemText,
  ListItem,
  ListItemIcon,
  Typography,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const SidebarItem = ({
  item: { IconComponent, text, path, isNewTab },
  isSelected,
  isSubItem,
  openChild,
}) => {
  const classes = useStyles();
  const history = useHistory();

  const onGoToPage = () => {
    if (isNewTab) {
      window.open(path, "_blank");
    } else {
      history.push(path);
    }
  };
  return (
    <ListItem
      button
      classes={{
        root: `${classes.item} ${isSubItem && classes.subItemColor}`,
        selected: classes.selectedItem,
      }}
      selected={isSelected}
      onClick={() => onGoToPage()}
    >
      <ListItemIcon className={classes.itemIcon}>{IconComponent}</ListItemIcon>
      <ListItemText
        primary={
          <Typography variant="body1" color="inherit">
            {text}
          </Typography>
        }
        className={classes.itemText}
      />
      {openChild === null ? "" : openChild ? <ExpandLess /> : <ExpandMore />}
    </ListItem>
  );
};

SidebarItem.propTypes = {
  item: PropTypes.object.isRequired,
  isSelected: PropTypes.bool,
  isSubItem: PropTypes.bool,
};
SidebarItem.defaultProps = { isSelected: false, isSubItem: false };

const useStyles = makeStyles((theme) => ({
  item: {
    minHeight: "40px",
    padding: "0 16px",
    margin: "7px 0",
    color: theme.palette.grey[800],
    "&:hover": {
      backgroundColor: theme.palette.grey[700] + "!important",
      color: "white",
    },
  },
  itemIcon: {
    minWidth: "30px",
    color: "inherit",
    "&>*": {
      width: "24px",
      height: "24px",
    },
  },
  itemText: {
    marginLeft: "20px",
    color: "inherit",
  },
  selectedItem: {
    backgroundColor: theme.palette.grey[700] + "!important",
    color: "white",
  },
  subItemColor: {
    color: theme.palette.text.link,
  },
}));

export default memo(SidebarItem);
