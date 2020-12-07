const jwt = require("jsonwebtoken");
const config = require("../configs/secret-key");

exports.verifyTokenAdmin = (req, res, next) => {
  let token = req.headers["accesstoken"];
  if (!token) {
    return res.status(401).send({
      success: false,
      error: "Unauthorized: No token provided.",
    });
  }

  jwt.verify(token, config.secret, (error, decoded) => {
    if (error) {
      return res.status(401).send({
        success: false,
        error: "Fail to Authentication. Error -> " + error,
      });
    }

    req.userId = decoded.id;
    req.role = decoded.role;
    req.restaurantId = decoded.restaurantId;

    if (req.role) {
      next();
    } else {
      return res.status(401).send({
        success: false,
        error: "Fail to Authentication. Error -> required role admin!!!!",
      });
    }
  });
};

exports.verifyTokenRestaurant = (req, res, next) => {
  let token = req.headers["accesstoken"];
  if (!token) {
    return res.status(401).send({
      success: false,
      error: "Unauthorized: No token provided.",
    });
  }

  jwt.verify(token, config.secret, (error, decoded) => {
    if (error) {
      return res.status(401).send({
        success: false,
        error: "Fail to Authentication. Error -> " + error,
      });
    }

    req.userId = decoded.id;
    req.role = decoded.role;
    req.restaurantId = decoded.restaurantId;

    if (!req.role) {
      next();
    } else {
      return res.status(401).send({
        success: false,
        error: "Fail to Authentication. Error -> required role restaurant!!!!",
      });
    }
  });
};

exports.checkPasswordEdit = (req, res, next) => {
  newPassword = "" + req.body.new_password;
  confirmPassword = "" + req.body.confirm_password;
  if (newPassword.length < 6) {
    return res
      .status(400)
      .send({ success: false, error: "Password length >= 6" });
  } else if (newPassword.length > 15) {
    return res
      .status(400)
      .send({ success: false, error: "Password length <= 15" });
  }
  if (newPassword !== confirmPassword) {
    return res
      .status(400)
      .send({ success: false, error: "Confirm password is invalid!" });
  }
  next();
};

exports.checkCreateRestaurant = (req, res, next) => {
  let errors = "";
  if (!req.body.restaurant_type) errors = errors + "Required restaurant type, ";
  if (!req.body.restaurant_name) errors = errors + "Required restaurant name, ";
  if (!req.body.start_contract) errors = errors + "Required start contract, ";
  if (!req.body.end_contract) errors = errors + "Required end contract, ";
  if (!req.body.email_restaurant)
    errors = errors + "Required email restaurant, ";
  if (!req.body.telephone_restaurant)
    errors = errors + "Required host line restaurant, ";

  if (!req.body.restaurantID) errors = errors + "Required username, ";
  if (!req.body.password) errors = errors + "Required password, ";
  if (!req.body.confirm_password)
    errors = errors + "Required confirm password, ";
  if (!req.body.state) errors = errors + "Required state, ";
  if (!req.body.company_name) errors = errors + "Required company name, ";
  if (!req.body.address_owner) errors = errors + "Required address owner, ";
  if (!req.body.telephone_owner) errors = errors + "Required telephone owner, ";
  if (!req.body.staff_name) errors = errors + "Required staff name, ";
  if (!req.body.email_owner) errors = errors + "Required email owner, ";

  if (!req.body.port_number) errors = errors + "Required port number, ";
  if (!req.body.city) errors = errors + "Required city, ";
  if (!req.body.address_restaurant)
    errors = errors + "Required address restaurant, ";
  if (!req.body.building) errors = errors + "Required building";

  if (errors !== "") {
    return res.status(400).send({ success: false, error: errors });
  }
  if (req.body.start_contract >= req.body.end_contract) {
    return res.status(400).send({
      success: false,
      error: "Required start contract < end contract",
    });
  }
  if (req.body.password !== req.body.confirm_password) {
    return res.status(400).send({
      success: false,
      error: "Password not equals confirm password",
    });
  }
  password = "" + req.body.password;
  confirmPassword = "" + req.body.confirm_password;
  if (password.length < 6) {
    return res
      .status(400)
      .send({ success: false, error: "Password length >= 6" });
  } else if (password.length > 15) {
    return res
      .status(400)
      .send({ success: false, error: "Password length <= 15" });
  }
  if (password !== confirmPassword) {
    return res
      .status(400)
      .send({ success: false, error: "Confirm password is invalid!" });
  }
  next();
};

exports.checkUpdateRestaurant = (req, res, next) => {
  let errors = "";
  if (!req.body.restaurant_type) errors = errors + "Required restaurant type, ";
  if (!req.body.restaurant_name) errors = errors + "Required restaurant name, ";
  if (!req.body.start_contract) errors = errors + "Required start contract, ";
  if (!req.body.end_contract) errors = errors + "Required end contract, ";
  if (!req.body.email_restaurant)
    errors = errors + "Required email restaurant, ";
  if (!req.body.telephone_restaurant)
    errors = errors + "Required host line restaurant, ";

  if (!req.body.state) errors = errors + "Required state, ";
  if (!req.body.company_name) errors = errors + "Required company name, ";
  if (!req.body.address_owner) errors = errors + "Required address owner, ";
  if (!req.body.telephone_owner) errors = errors + "Required telephone owner, ";
  if (!req.body.staff_name) errors = errors + "Required staff name, ";
  if (!req.body.email_owner) errors = errors + "Required email owner, ";

  if (!req.body.port_number) errors = errors + "Required port number, ";
  if (!req.body.city) errors = errors + "Required city, ";
  if (!req.body.address_restaurant)
    errors = errors + "Required address restaurant, ";
  if (!req.body.building) errors = errors + "Required building";

  if (errors !== "") {
    return res.status(400).send({ success: false, error: errors });
  }
  if (req.body.start_contract >= req.body.end_contract) {
    return res.status(400).send({
      success: false,
      error: "Required start contract < end contract",
    });
  }
  if (req.body.password !== req.body.confirm_password) {
    return res.status(400).send({
      success: false,
      error: "Password not equals confirm password",
    });
  }
  next();
};

exports.checkCategory = (req, res, next) => {
  if (!req.body.name) {
    return res
      .status(400)
      .send({ success: false, error: "Required name category" });
  }
  next();
};

exports.checkItem = (req, res, next) => {
  let errors = "";
  if (!req.body.image) errors = errors + "Required image item, ";
  if (!req.body.name) errors = errors + "Required name item, ";
  if (!req.body.code) errors = errors + "Required code item, ";
  if (!req.body.price) errors = errors + "Required price item";
  if (errors !== "") {
    return res.status(400).send({ success: false, error: errors });
  }
  next();
};
