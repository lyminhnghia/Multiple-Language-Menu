module.exports = (sequelize, Sequelize) => {
  const Language = sequelize.define("languages", {
    lang_code: Sequelize.STRING,
    lang_name: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    name: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    sort_order: Sequelize.INTEGER,
    createdAt: Sequelize.BIGINT,
    updatedAt: Sequelize.BIGINT,
  });
  return Language;
};
