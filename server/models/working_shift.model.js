module.exports = (sequelize, Sequelize) => {
  const WorkingShift = sequelize.define("working_shifts", {
    start_time: Sequelize.BIGINT,
    end_time: Sequelize.BIGINT,
    day_of_week: Sequelize.STRING,
    createdAt: Sequelize.BIGINT,
    updatedAt: Sequelize.BIGINT,
  });
  return WorkingShift;
};
