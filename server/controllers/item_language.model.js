module.exports = (sequelize, Sequelize) => {
  const ItemLanguage = sequelize.define("item_languages", {
    name: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    price: Sequelize.INTEGER,
    description: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    createdAt: Sequelize.BIGINT,
    updatedAt: Sequelize.BIGINT,
  });
  return ItemLanguage;
};
