module.exports = (app) => {
  const LanguageSchedule = require("../schedule/language.schedule");

  let IntervalCreateLanguage = () => {
    LanguageSchedule.createLanguage();
  };

  setInterval(IntervalCreateLanguage, 1000 * 60 * 60 * 24);
  clearInterval(IntervalCreateLanguage);
};
