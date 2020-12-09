const db = require("../../models/index");
const CategoryLanguage = db.category_language;
const ItemLanguage = db.item_language;
const Language = db.language;
const Category = db.category;

exports.listCategoryLanguage = async (req, res) => {
  try {
    let category_language = await CategoryLanguage.findAll({
      attributes: ["id", "name", "description"],
      include: [
        {
          model: ItemLanguage,
          attributes: ["id"],
        },
        {
          model: Language,
          where: {
            lang_code: req.query.lang_code,
          },
          attributes: ["id", "lang_code"],
        },
        {
          model: Category,
          where: {
            restaurantId: req.query.restaurantId,
          },
          attributes: ["id", "restaurantId"],
        },
      ],
    });
    res.status(200).send({ success: true, data: category_language });
  } catch (error) {
    res.status(500).send({ success: false, message: error });
  }
};

exports.listItemLanguage = async (req, res) => {
  try {
    let item_language = await ItemLanguage.findAll({
      where: {
        categoryLanguageId: req.query.categoryLanguageId,
      },
      attributes: [
        "id",
        "name",
        "code",
        "price",
        "currency_unit",
        "description",
        "itemId",
      ],
    });
    res.status(200).send({ success: true, data: item_language });
  } catch (error) {
    res.status(500).send({ success: false, message: error });
  }
};

exports.orderItem = async (req, res) => {};

exports.orderHistory = async (req, res) => {};
