module.exports = (sequelize, Sequelize) => {
  const WorkingShiftLanguage = sequelize.define("working_shift_languages", {
    day_of_week: Sequelize.STRING,
    createdAt: Sequelize.BIGINT,
    updatedAt: Sequelize.BIGINT,
  });
  return WorkingShiftLanguage;
};
