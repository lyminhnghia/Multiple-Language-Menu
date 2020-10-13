module.exports = (sequelize, Sequelize) => {
  const Address = sequelize.define("addresses", {
    post_number: Sequelize.STRING,
    city: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    address: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    building: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    status_change: Sequelize.BOOLEAN,
    createdAt: Sequelize.BIGINT,
    updatedAt: Sequelize.BIGINT,
  });
  return Address;
};
