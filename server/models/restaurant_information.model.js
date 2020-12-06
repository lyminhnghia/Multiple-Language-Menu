module.exports = (sequelize, Sequelize) => {
  const RestaurantInformation = sequelize.define("restaurant_informations", {
    restaurant_type: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    restaurant_name: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
  });
  return RestaurantInformation;
};
