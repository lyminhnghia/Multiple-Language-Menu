const QRcode = require("qrcode");
const fs = require("fs");
const db = require("../../models/index");
const Shop = db.shop;
const Account = db.account;
const Owner = db.owner;

exports.getContractShop = async (req, res) => {
  try {
    let shop = await Shop.findOne({
      where: {
        id: req.shopId,
      },
    });
    if (!shop) {
      return res
        .status(400)
        .send({ success: false, error: "Shop does not exists!" });
    }
    let contract = await Shop.findOne({
      where: {
        id: req.shopId,
      },
      attributes: ["shop_name", "end_contract"],
      include: [
        {
          model: Account,
          attributes: ["username"],
        },
        {
          model: Owner,
          attributes: [
            "company_name",
            "address",
            "telephone",
            "staff_name",
            "email",
          ],
        },
      ],
    });
    res.status(200).send({ success: true, data: contract });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};

exports.getLanguage = async (req, res) => {
  try {
    let;
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};

exports.sortLanguage = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};

exports.createQRCode = async (req, res) => {
  let temp = req.body.url;
  QRcode.toDataURL(temp, { errorCorrectionLevel: "H" }, (error, url) => {
    if (!error) {
      let base64Image = url.split(";base64,").pop();
      res.status(200).send(base64Image);
    } else {
      res.status(200).send({ success: false, error: error });
    }
  });
};
