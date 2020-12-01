module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define("customers", {
    customer_name: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    telephone: Sequelize.STRING,
    address: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    tables: Sequelize.tables,
  });
  return Customer;
};
