const db = require("../../models/index");
const Shop = db.shop;
const Owner = db.owner;
const Address = db.address;

exports.createShop = async (req, res) => {
  try {
    // let shop =
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};

exports.editShop = async (req, res) => {};

exports.getListShop = async (req, res) => {};

exports.getShop = async (req, res) => {};

exports.deleteShop = async (req, res) => {};
