const QRcode = require("qrcode");
const db = require("../../models/index");
const Shop = db.shop;
const Account = db.account;
const Owner = db.owner;
const Language = db.language;
const PaymentMethod = db.payment_method;
const SortLanguage = db.sort_language;
const WorkingShift = db.working_shift;
const Address = db.address;

exports.getProfilebyShop = async (req, res) => {
  try {
    let shop = await Shop.findOne({
      where: {
        id: req.shopId,
      },
      attributes: [
        "shop_type",
        "shop_name",
        "email",
        "telephone",
        "name_wifi",
        "password_wifi",
        "url_website",
        "url_image",
        "url_qrcode",
      ],
      include: [
        {
          model: PaymentMethod,
        },
        {
          model: WorkingShift,
        },
        {
          model: Address,
        },
      ],
    });
    res.status(200).send({ success: true, data: shop });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};

exports.updateProfilebyShop = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};

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
    let sortLanguage = await SortLanguage.findAll({
      attributes: ["sort_order"],
      where: {
        shopId: req.shopId,
      },
      order: [["sort_order", "ASC"]],
      include: [
        {
          model: Language,
          attributes: ["id", "lang_code", "lang_name", "name"],
        },
      ],
    });
    res.status(200).send({ success: true, data: sortLanguage });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};

exports.sortLanguage = async (req, res) => {
  try {
    let sortLanguage = req.body;
    if (sortLanguage.length !== 29) {
      return res
        .status(400)
        .send({ success: false, error: "Required 29 language!" });
    }
    res
      .status(200)
      .send({ success: true, data: "Updated sort language is successful!" });
    for (let i = 0; i < sortLanguage.length; i++) {
      await SortLanguage.update(
        {
          sort_order: sortLanguage[i].sort_order,
        },
        {
          where: {
            languageId: sortLanguage[i].languageId,
            shopId: req.shopId,
          },
        }
      );
    }
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
