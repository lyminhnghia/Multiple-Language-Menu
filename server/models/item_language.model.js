module.exports = (sequelize, Sequelize) => {
  const ItemLanguage = sequelize.define("item_languages", {
    name: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    code: Sequelize.STRING,
    price: Sequelize.INTEGER,
    description: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
  });
  return ItemLanguage;
};
