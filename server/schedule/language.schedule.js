const translate = require("googletrans").default;
const language = require("../configs/language");
const db = require("../models/index");
const Language = db.language;

exports.createLanguage = async () => {
  try {
    for (let i = 0; i < language.length; i++) {
      let langs = await Language.findOne({
        where: {
          lang_code: language[i].lang_code,
        },
      });
      if (!langs) {
        let data = await translate(language[i].lang_name, {
          from: "en",
          to: language[i].lang_code,
        });
        await Language.create({
          lang_code: language[i].lang_code,
          lang_name: data.text,
          name: language[i].lang_name,
          sort_order: i + 1,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};
