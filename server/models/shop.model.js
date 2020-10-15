module.exports = (sequelize, Sequelize) => {
  const Shop = sequelize.define("shops", {
    shop_type: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    shop_name: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    start_contract: Sequelize.BIGINT,
    end_contract: Sequelize.BIGINT,
    email: Sequelize.STRING,
    telephone: Sequelize.STRING,
    name_wifi: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    password_wifi: Sequelize.STRING,
    url_website: Sequelize.STRING,
    url_image: Sequelize.STRING,
    url_qrcode: Sequelize.STRING,
    created: Sequelize.BIGINT,
  });
  return Shop;
};
