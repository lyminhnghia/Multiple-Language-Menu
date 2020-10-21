const translate = require("googletrans").default;
const language = require("../configs/language");
const elementTranslate = require("../configs/element-translate");
const db = require("../models/index");
const Language = db.language;
const TitleLanguage = db.title_language;

exports.createLanguage = async () => {
  try {
    for (let i = 0; i < language.length; i++) {
      let langs = await Language.findOne({
        where: {
          lang_code: language[i].lang_code,
        },
      });
      if (!langs) {
        await Language.create({
          lang_code: language[i].lang_code,
          lang_name: language[i].lang_name,
          name: language[i].name,
          sort_order: language[i].order_list,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

exports.createElementTranslate = async () => {
  try {
    let titleLang = await TitleLanguage.findOne({
      where: elementTranslate,
    });
    if (!titleLang) {
      await TitleLanguage.create(elementTranslate);
    }
    for (let i = 0; i < language.length; i++) {
      let title = await TitleLanguage.findOne({
        where: {
          languageId: language[i].order_list,
        },
      });
      if (!title) {
        let menu = await translate(elementTranslate.menu, {
          from: "vi",
          to: language[i].lang_code,
        });
        let history = await translate(elementTranslate.history, {
          from: "vi",
          to: language[i].lang_code,
        });
        let shop_info = await translate(elementTranslate.shop_info, {
          from: "vi",
          to: language[i].lang_code,
        });
        let guide_welcome = await translate(elementTranslate.guide_welcome, {
          from: "vi",
          to: language[i].lang_code,
        });
        let guide_customer_name = await translate(
          elementTranslate.guide_customer_name,
          {
            from: "vi",
            to: language[i].lang_code,
          }
        );
        let guide_customer_phone = await translate(
          elementTranslate.guide_customer_phone,
          {
            from: "vi",
            to: language[i].lang_code,
          }
        );
        let guide_start_button = await translate(
          elementTranslate.guide_start_button,
          {
            from: "vi",
            to: language[i].lang_code,
          }
        );
        let item_button_add = await translate(
          elementTranslate.item_button_add,
          {
            from: "vi",
            to: language[i].lang_code,
          }
        );
        let order_list_delete = await translate(
          elementTranslate.order_list_delete,
          {
            from: "vi",
            to: language[i].lang_code,
          }
        );
        let order_list_button = await translate(
          elementTranslate.order_list_button,
          {
            from: "vi",
            to: language[i].lang_code,
          }
        );
        let order_finish = await translate(elementTranslate.order_finish, {
          from: "vi",
          to: language[i].lang_code,
        });
        let order_total = await translate(elementTranslate.order_total, {
          from: "vi",
          to: language[i].lang_code,
        });
        let order_history = await translate(elementTranslate.order_history, {
          from: "vi",
          to: language[i].lang_code,
        });

        TitleLanguage.create({
          menu: menu.text,
          history: history.text,
          shop_info: shop_info.text,
          guide_welcome: guide_welcome.text,
          guide_customer_name: guide_customer_name.text,
          guide_customer_phone: guide_customer_phone.text,
          guide_start_button: guide_start_button.text,
          item_button_add: item_button_add.text,
          order_list_delete: order_list_delete.text,
          order_list_button: order_list_button.text,
          order_finish: order_finish.text,
          order_total: order_total.text,
          order_history: order_history.text,
          languageId: language[i].order_list,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};
