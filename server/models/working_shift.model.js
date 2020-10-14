module.exports = (sequelize, Sequelize) => {
  const WorkingShift = sequelize.define("working_shifts", {
    start_time: Sequelize.BIGINT,
    end_time: Sequelize.BIGINT,
  });
  return WorkingShift;
};
