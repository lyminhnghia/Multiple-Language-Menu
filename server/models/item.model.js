module.exports = (sequelize, Sequelize) => {
  const Item = sequelize.define("items", {
    name: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    price: Sequelize.INTEGER,
    description: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    status_change: Sequelize.BOOLEAN,
    createdAt: Sequelize.BIGINT,
    updatedAt: Sequelize.BIGINT,
  });
  return Item;
};
