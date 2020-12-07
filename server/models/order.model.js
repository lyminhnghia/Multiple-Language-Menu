module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define("orders", {
    amount: Sequelize.INTEGER,
    time_order: Sequelize.BIGINT,
    special_note: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    confirm: Sequelize.INTEGER,
  });
  return Order;
};
