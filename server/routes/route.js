module.exports = (app) => {
  const LanguageSchedule = require("../schedule/language.schedule");
  const global = require("../controllers/global");
  const middleware = require("../middleware/middleware");

  // ROLE ADMIN
  // Login
  app.post("/api/admin/login", global.LoginAdmin);
  app.put(
    "/api/admin/edit-password",
    [middleware.verifyTokenAdmin, middleware.checkPasswordEdit],
    global.editPassword
  );

  // ROLE SHOP
  // Login
  app.post("/api/shop/login", global.LoginShop);
  app.put(
    "/api/shop/edit-password",
    [middleware.verifyTokenShop, middleware.checkPasswordEdit],
    global.editPassword
  );

  let IntervalCreateLanguage = () => {
    LanguageSchedule.createLanguage();
  };

  setInterval(IntervalCreateLanguage, 1000 * 60 * 60 * 24);
  clearInterval(IntervalCreateLanguage);
};
