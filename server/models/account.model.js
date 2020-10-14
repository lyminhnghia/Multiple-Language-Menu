module.exports = (sequelize, Sequelize) => {
  const Account = sequelize.define("accounts", {
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    email: Sequelize.STRING,
    state: Sequelize.INTEGER,
    role: Sequelize.BOOLEAN,
    created: Sequelize.BIGINT,
  });
  return Account;
};
