const jwt = require("jsonwebtoken");
const config = require("../configs/secret-key");

exports.verifyTokenAdmin = async (req, res, next) => {
  let token = req.headers["x-access-token"];
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

exports.verifyTokenShop = async (req, res, next) => {
  let token = req.headers["x-access-token"];
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

    if (!req.role) {
      next();
    } else {
      return res.status(401).send({
        success: false,
        error: "Fail to Authentication. Error -> required role shop!!!!",
      });
    }
  });
};

exports.checkPasswordEdit = async (req, res, next) => {
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

exports.checkCreateShop = async (req, res, next) => {
  let errors = "";
  if (!req.body.shop_type) errors = errors + "Required shop type, ";
  if (!req.body.shop_name) errors = errors + "Required shop name, ";
  if (!req.body.start_contract) errors = errors + "Required start contract, ";
  if (!req.body.end_contract) errors = errors + "Required end contract, ";
  if (!req.body.email_shop) errors = errors + "Required email shop, ";
  if (!req.body.telephone_shop) errors = errors + "Required host line shop, ";

  if (!req.body.shopID) errors = errors + "Required username, ";
  if (!req.body.password) errors = errors + "Required password, ";
  if (!req.body.state) errors = errors + "Required state, ";
  if (!req.body.company_name) errors = errors + "Required company name, ";
  if (!req.body.address_owner) errors = errors + "Required address owner, ";
  if (!req.body.telephone_owner) errors = errors + "Required telephone owner, ";
  if (!req.body.staff_name) errors = errors + "Required staff name, ";
  if (!req.body.email_owner) errors = errors + "Required email owner, ";

  if (!req.body.port_number) errors = errors + "Required port number, ";
  if (!req.body.city) errors = errors + "Required city, ";
  if (!req.body.address_shop) errors = errors + "Required address shop, ";
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
