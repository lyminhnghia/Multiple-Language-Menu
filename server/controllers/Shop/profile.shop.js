const QRcode = require("qrcode");
const fs = require("fs");
const db = require("../../models/index");
const Shop = db.shop;

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
