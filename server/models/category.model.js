module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define("categories", {
    name: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    description: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    status_change: Sequelize.BOOLEAN,
  });
  return Category;
};
