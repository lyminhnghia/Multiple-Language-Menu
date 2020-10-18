import React, { memo } from "react";
import PropTypes from "prop-types";
import { makeStyles, ListItemText, ListItem, ListItemIcon, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const SidebarItem = ({ item: { IconComponent, text, path, isNewTab }, isSelected, isSubItem }) => {
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
            classes={{ root: `${classes.item} ${isSubItem && classes.subItemColor}`, selected: classes.selectedItem }}
            selected={isSelected}
            onClick={() => onGoToPage()}
        >
            <ListItemIcon className={classes.itemIcon}>{IconComponent}</ListItemIcon>
            <ListItemText
                primary={
                    <Typography className={classes.text}>
                        {text}
                    </Typography>
                }
                className={classes.itemText}
            />
        </ListItem>
    );
};

const useStyles = makeStyles(theme => ({
    item: {
        minHeight: "60px",
        padding: "0 18px",
        margin: "1px 0",
        color: theme.palette.grey[800],
        "&:hover": { backgroundColor: theme.palette.grey[700] + "!important", color: "white" },
    },
    itemIcon: {
        minWidth: "30px",
        color: "#ffffff",
        "&>*": {
            width: "24px",
            height: "24px",
        },
    },
    itemText: {
        marginLeft: "20px",
        color: "#ffffff"
    },
    text: {
        fontSize: 16
    },
    selectedItem: {
        backgroundColor: theme.palette.grey[700] + "!important",
        color: "white",
    },
    subItemColor: {
        color: theme.palette.text.link,
    },
}));

SidebarItem.propTypes = {
    item: PropTypes.object.isRequired,
    isSelected: PropTypes.bool,
    isSubItem: PropTypes.bool,
};
SidebarItem.defaultProps = { isSelected: false, isSubItem: false };

export default memo(SidebarItem);
