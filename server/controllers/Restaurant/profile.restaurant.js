const QRcode = require("qrcode");
const db = require("../../models/index");
const Restaurant = db.restaurant;
const Account = db.account;
const Owner = db.owner;
const Language = db.language;
const PaymentMethod = db.payment_method;
const SortLanguage = db.sort_language;
const WorkingShift = db.working_shift;
const Address = db.address;

exports.getProfilebyRestaurant = async (req, res) => {
  try {
    let restaurant = await Restaurant.findOne({
      where: {
        id: req.restaurantId,
      },
      attributes: [
        "restaurant_type",
        "restaurant_name",
        "email",
        "telephone",
        "name_wifi",
        "password_wifi",
        "url_website",
        "url_image",
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
    res.status(200).send({ success: true, data: restaurant });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};

exports.updateProfilebyRestaurant = async (req, res) => {
  try {
    let restaurant = await Restaurant.findOne({
      where: {
        restaurant_name: req.body.restaurant_name,
      },
    });
    if (restaurant) {
      return res.status(400).send({
        success: false,
        error: "Restaurant name already exist!",
      });
    }
    res
      .status(200)
      .send({ success: true, data: "Updated restaurant successful!" });
    Restaurant.update(
      {
        restaurant_type: req.body.restaurant_type,
        restaurant_name: req.body.restaurant_name,
        email: req.body.email,
        telephone: req.body.telephone,
        name_wifi: req.body.name_wifi,
        password_wifi: req.body.password_wifi,
        url_website: req.body.url_website,
        url_image: req.body.url_image,
      },
      {
        where: {
          id: req.restaurantId,
        },
      }
    );
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};

exports.getContractRestaurant = async (req, res) => {
  try {
    let restaurant = await Restaurant.findOne({
      where: {
        id: req.restaurantId,
      },
    });
    if (!restaurant) {
      return res
        .status(400)
        .send({ success: false, error: "Restaurant does not exists!" });
    }
    let contract = await Restaurant.findOne({
      where: {
        id: req.restaurantId,
      },
      attributes: ["restaurant_name", "end_contract"],
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
        restaurantId: req.restaurantId,
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
            restaurantId: req.restaurantId,
          },
        }
      );
    }
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};

exports.createQRCode = async (req, res) => {
  try {
    let temp = req.body.url;
    QRcode.toDataURL(
      temp,
      { errorCorrectionLevel: "H" },
      async (error, url) => {
        if (!error) {
          res.status(200).send({ success: true, data: url });
          await Restaurant.update(
            {
              url_qrcode: temp,
            },
            {
              where: {
                id: req.restaurantId,
              },
            }
          );
        } else {
          res.status(500).send({ success: false, error: error });
        }
      }
    );
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};

exports.getQRCode = async (req, res) => {
  try {
    let infoCode = await Restaurant.findOne({
      where: {
        id: req.restaurantId,
      },
      attributes: ["url_qrcode"],
    });
    if (infoCode.url_qrcode) {
      QRcode.toDataURL(
        infoCode.url_qrcode,
        { errorCorrectionLevel: "H" },
        (error, url) => {
          if (!error) {
            res.status(200).send({
              success: true,
              data: { url: url, id: req.restaurantId },
            });
          } else {
            res.status(500).send({ success: false, error: error });
          }
        }
      );
    } else {
      res.status(200).send({
        success: true,
        data: { id: req.restaurantId },
      });
    }
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};
