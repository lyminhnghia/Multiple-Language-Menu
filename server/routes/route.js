module.exports = (app) => {
  const LanguageSchedule = require("../schedule/language.schedule");

  let interval = () => {
    LanguageSchedule.createLanguage();
  };

  setInterval(interval, 1000 * 60 * 60 * 24);
  clearInterval(interval);
};
