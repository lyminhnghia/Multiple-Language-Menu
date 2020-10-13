module.exports = (sequelize, Sequelize) => {
  const Account = sequelize.define("accounts", {
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    email: Sequelize.STRING,
    state: Sequelize.INTEGER,
    role: Sequelize.BOOLEAN,
    createdAt: Sequelize.BIGINT,
    updatedAt: Sequelize.BIGINT,
  });
  return Account;
};
