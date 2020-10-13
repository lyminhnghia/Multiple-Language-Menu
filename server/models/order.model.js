module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define("orders", {
    amount: Sequelize.INTEGER,
    time_order: Sequelize.BIGINT,
    createdAt: Sequelize.BIGINT,
    updatedAt: Sequelize.BIGINT,
  });
  return Order;
};
