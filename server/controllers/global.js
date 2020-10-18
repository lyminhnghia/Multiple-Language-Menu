const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../models/index");
const config = require("../configs/secret-key");

const Account = db.account;

exports.LoginAdmin = async (req, res) => {
  try {
    let user = await Account.findOne({
      where: {
        username: req.body.username,
        role: true,
      },
    });

    if (!user) {
      return res.status(400).send({
        success: false,
        error: "Username does not exist!",
      });
    }

    let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) {
      return res
        .status(400)
        .send({ success: false, error: "Password incorrect!" });
    }

    let JWToken = jwt.sign({ id: user.id, role: user.role }, config.secret, {
      expiresIn: 86400,
    });

    res.status(200).send({ success: true, data: JWToken });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};

exports.LoginShop = async (req, res) => {
  try {
    let user = await Account.findOne({
      where: {
        username: req.body.username,
        role: false,
      },
    });

    if (!user) {
      return res.status(400).send({
        success: false,
        error: "Username does not exist!",
      });
    }

    let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) {
      return res
        .status(400)
        .send({ success: false, error: "Password incorrect!" });
    }

    let JWToken = jwt.sign({ id: user.id, role: user.role }, config.secret, {
      expiresIn: 86400,
    });

    res.status(200).send({ success: true, data: JWToken });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};

exports.editPassword = async (req, res) => {
  try {
    let user = await Account.findOne({
      where: {
        id: req.userId,
      },
    });

    let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordIsValid) {
      return res
        .status(400)
        .send({ success: false, error: "Password invalid!" });
    }

    await Account.update(
      {
        password: bcrypt.hashSync(req.body.newpassword, 8),
      },
      {
        where: {
          id: req.userId,
        },
      }
    );

    res
      .status(200)
      .send({ success: true, data: "Update password successful!" });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};
