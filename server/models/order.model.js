module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define("orders", {
    amount: Sequelize.INTEGER,
    time_order: Sequelize.BIGINT,
  });
  return Order;
};
