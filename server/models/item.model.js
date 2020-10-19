module.exports = (sequelize, Sequelize) => {
  const Item = sequelize.define("items", {
    image_item: Sequelize.STRING,
    name: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    code: Sequelize.STRING,
    price: Sequelize.INTEGER,
    description: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    status_change: Sequelize.BOOLEAN,
  });
  return Item;
};
