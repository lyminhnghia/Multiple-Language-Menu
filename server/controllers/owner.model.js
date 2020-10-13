module.exports = (sequelize, Sequelize) => {
  const Owner = sequelize.define("owners", {
    company_name: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    address: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    telephone: Sequelize.STRING,
    staff_name: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    email: Sequelize.STRING,
    createdAt: Sequelize.BIGINT,
    updatedAt: Sequelize.BIGINT,
  });
  return Owner;
};
