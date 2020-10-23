module.exports = (sequelize, Sequelize) => {
  const AddressLanguage = sequelize.define("address_languages", {
    port_number: Sequelize.STRING,
    city: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    address: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    building: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
  });
  return AddressLanguage;
};
