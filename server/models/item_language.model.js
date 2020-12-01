module.exports = (sequelize, Sequelize) => {
  const ItemLanguage = sequelize.define("item_languages", {
    image_item: Sequelize.STRING,
    name: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    code: Sequelize.STRING,
    price: Sequelize.INTEGER,
    currency_unit: Sequelize.STRING,
    description: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
  });
  return ItemLanguage;
};
