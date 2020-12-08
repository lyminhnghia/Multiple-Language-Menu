const db = require("../../models/index");
const Language = db.language;

exports.guideRestaurantLanguage = (req, res) => {};

exports.listRestaurantLanguage = (req, res) => {};

exports.listLanguage = async (req, res) => {
  try {
    let languages = await Language.findAll({
      attributes: ["id", "lang_code", "lang_name", "name"],
    });

    res.status(200).send({ success: true, data: languages });
  } catch (error) {
    res.status(500).send({ success: false, message: error });
  }
};

exports.sidebarLanguage = (req, res) => {};

exports.restaurantInfoLanguage = (req, res) => {};
