module.exports = (sequelize, Sequelize) => {
  const ShopInformation = sequelize.define("shop_informations", {
    shop_type: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    shop_name: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    name_wifi: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    createdAt: Sequelize.BIGINT,
    updatedAt: Sequelize.BIGINT,
  });
  return ShopInformation;
};
