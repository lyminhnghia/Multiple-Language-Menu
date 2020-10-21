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
          sort_order: language[i].sort_order,
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
      TitleLanguage.create(elementTranslate);
    }
  } catch (error) {
    console.log(error);
  }
};
