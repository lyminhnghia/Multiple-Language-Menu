import React, { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TableCell, Box } from "@material-ui/core";
import PropTypes from "prop-types";

const CellBody = props => {
    const classes = useStyles();
    const { cellData, className } = props;

    return (
        <TableCell
            align="center"
            classes={{
                root: className,
                body: classes.body,
            }}
        >
            {cellData}
        </TableCell>
    );
};

const useStyles = makeStyles(theme => ({
    body: {
        color: "#787878",
        border: `1px solid ${theme.palette.grey[200]}`,
        paddingTop: 6,
        paddingBottom: 6,
    },
}));

CellBody.propTypes = {
    cellData: PropTypes.node,
    firstCol: PropTypes.bool,
    style: PropTypes.object,
    isStatus: PropTypes.bool,
};

CellBody.defaultProps = {
    style: { isStatus: false },
};

export default memo(CellBody);
