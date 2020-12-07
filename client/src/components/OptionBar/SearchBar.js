import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, InputAdornment, OutlinedInput } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
const SearchBar = ({
  placeholder,
  value,
  onChange,
  onKeyUp,
  className,
  ...otherProps
}) => {
  const classes = useStyles();

  const [inputValue, setInputValue] = useState(value);
  const onTyping = (event) => {
    if (Boolean(onChange)) {
      onChange(event.target.value);
    }
    setInputValue(event.target.value);
  };
  return (
    <OutlinedInput
      placeholder={placeholder}
      type="text"
      value={inputValue}
      onChange={onTyping}
      classes={{
        input: `${classes.input} medium-md-txt`,
        root: `${classes.root} ${className}`,
        notchedOutline: classes.notchedOutline,
      }}
      startAdornment={
        <InputAdornment position="start" className={classes.icon}>
          <SearchIcon className={classes.SearchIcon} />
        </InputAdornment>
      }
      {...otherProps}
    />
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 0,
    fontSize: 14,
    borderRadius: "unset",
    border: `1px solid ${theme.palette.grey["700"]}`,
  },
  notchedOutline: {
    border: "none",
  },
  input: {
    height: "unset",
    padding: "0 20px",
    color: "#000000",
    "&::placeholder": {
      color: "#000000",
      opacity: 0.7,
    },
    "@media only screen and (max-width: 375px)": {
      padding: "0 10px",
    },
  },
  icon: {
    minWidth: 60,
    width: 60,
    height: "100%",
    maxHeight: "100%",
    minHeight: 30,
    justifyContent: "center",
    borderRight: `1px solid ${theme.palette.grey["700"]}`,
    marginRight: 0,
    "@media only screen and (max-width: 375px)": {
      minWidth: 40,
      width: 40,
    },
  },
  SearchIcon: {
    fontSize: 24,
    color: theme.palette.grey["700"],
  },
}));
SearchBar.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
};
SearchBar.defaultProps = {
  placeholder: "",
  value: "",
  className: "",
  type: "",
};
export default memo(SearchBar);
