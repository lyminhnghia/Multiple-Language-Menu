module.exports = (sequelize, Sequelize) => {
  const PaymentMethod = sequelize.define("payment_methods", {
    cash: Sequelize.BOOLEAN,
    credit_card: Sequelize.BOOLEAN,
    app: Sequelize.BOOLEAN,
    etc: Sequelize.BOOLEAN,
  });
  return PaymentMethod;
};
