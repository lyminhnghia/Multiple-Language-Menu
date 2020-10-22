module.exports = (sequelize, Sequelize) => {
  const SortLanguage = sequelize.define("sort_languages", {
    sort_order: Sequelize.INTEGER,
  });
  return SortLanguage;
};
