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

exports.checkPasswordEdit = (req, res, next) => {
  newPassword = "" + req.body.newpassword;
  confirmPassword = "" + req.body.newpassword;
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
