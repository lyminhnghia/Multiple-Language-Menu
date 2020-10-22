module.exports = (sequelize, Sequelize) => {
  const TitleLanguage = sequelize.define("title_languages", {
    menu: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    history: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    shop_info: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    guide_welcome: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    guide_customer_name:
      Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    guide_customer_phone:
      Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    guide_start_button:
      Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    item_button_add: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    order_list_delete: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    order_list_button: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    order_finish: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    order_total: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    order_history: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    payment_method: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    cash: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    credit_card: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    app: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
    etc: Sequelize.TEXT + " CHARSET utf8 COLLATE utf8_general_ci",
  });
  return TitleLanguage;
};
