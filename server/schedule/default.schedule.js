const dotenv = require("dotenv");
dotenv.config();
const key = process.env.KEY;
const { Translate } = require("@google-cloud/translate").v2;
const googleTranslate = new Translate({
  key: key,
});
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
        let [menu] = await googleTranslate.translate(
          elementTranslate.menu,
          language[i].lang_code
        );
        let [history] = await googleTranslate.translate(
          elementTranslate.history,
          language[i].lang_code
        );
        let [shop_info] = await googleTranslate.translate(
          elementTranslate.shop_info,
          language[i].lang_code
        );
        let [guide_welcome] = await googleTranslate.translate(
          elementTranslate.guide_welcome,
          language[i].lang_code
        );
        let [guide_customer_name] = await googleTranslate.translate(
          elementTranslate.guide_customer_name,
          language[i].lang_code
        );
        let [guide_customer_phone] = await googleTranslate.translate(
          elementTranslate.guide_customer_phone,
          language[i].lang_code
        );
        let [guide_start_button] = await googleTranslate.translate(
          elementTranslate.guide_start_button,
          language[i].lang_code
        );
        let [item_button_add] = await googleTranslate.translate(
          elementTranslate.item_button_add,
          language[i].lang_code
        );
        let [order_list_delete] = await googleTranslate.translate(
          elementTranslate.order_list_delete,
          language[i].lang_code
        );
        let [order_list_button] = await googleTranslate.translate(
          elementTranslate.order_list_button,
          language[i].lang_code
        );
        let [order_finish] = await googleTranslate.translate(
          elementTranslate.order_finish,
          language[i].lang_code
        );
        let [order_total] = await googleTranslate.translate(
          elementTranslate.order_total,
          language[i].lang_code
        );
        let [order_history] = await googleTranslate.translate(
          elementTranslate.order_history,
          language[i].lang_code
        );
        let [payment_method] = await googleTranslate.translate(
          elementTranslate.payment_method,
          language[i].lang_code
        );
        let [cash] = await googleTranslate.translate(
          elementTranslate.cash,
          language[i].lang_code
        );
        let [credit_card] = await googleTranslate.translate(
          elementTranslate.credit_card,
          language[i].lang_code
        );
        let [app] = await googleTranslate.translate(
          elementTranslate.app,
          language[i].lang_code
        );
        let [etc] = await googleTranslate.translate(
          elementTranslate.etc,
          language[i].lang_code
        );

        TitleLanguage.create({
          menu: menu,
          history: history,
          shop_info: shop_info,
          guide_welcome: guide_welcome,
          guide_customer_name: guide_customer_name,
          guide_customer_phone: guide_customer_phone,
          guide_start_button: guide_start_button,
          item_button_add: item_button_add,
          order_list_delete: order_list_delete,
          order_list_button: order_list_button,
          order_finish: order_finish,
          order_total: order_total,
          order_history: order_history,
          payment_method: payment_method,
          cash: cash,
          credit_card: credit_card,
          app: app,
          etc: etc,
          languageId: language[i].order_list,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};
