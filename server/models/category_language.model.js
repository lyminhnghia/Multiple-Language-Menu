module.exports = (sequelize, Sequelize) => {
  const CategoryLanguage = sequelize.define("category_languages", {
    name: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    description: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    createdAt: Sequelize.BIGINT,
    updatedAt: Sequelize.BIGINT,
  });
  return CategoryLanguage;
};
