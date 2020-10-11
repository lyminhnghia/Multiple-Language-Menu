import React, { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TableCell } from "@material-ui/core";
import PropTypes from "prop-types";

const CellHead = props => {
    const classes = useStyles();
    const { className, cellData } = props;

    return (
        <TableCell
            align="center"
            classes={{
                root: `${classes.root} ${className}`,
            }}
        >
            {cellData}
        </TableCell>
    );
};

const useStyles = makeStyles(theme => ({
    root: {
        color: theme.palette.text.primary,
        border: `1px solid ${theme.palette.grey[200]}`,
        backgroundColor: "#f1f3f6",
        paddingTop: 8,
        paddingBottom: 8,
    },
}));

CellHead.propTypes = {
    cellData: PropTypes.string,
    style: PropTypes.object,
};

CellHead.defaultProps = {
    style: {},
};

export default memo(CellHead);
