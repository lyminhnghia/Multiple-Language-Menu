module.exports = (sequelize, Sequelize) => {
  const Shop = sequelize.define("shops", {
    shop_type: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    shopid: Sequelize.STRING,
    shop_name: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    start_contract: Sequelize.BIGINT,
    end_contract: Sequelize.BIGINT,
    name_wifi: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    createdAt: Sequelize.BIGINT,
    updatedAt: Sequelize.BIGINT,
  });
  return Shop;
};
