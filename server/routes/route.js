module.exports = (app) => {
  const LanguageSchedule = require("../schedule/language.schedule");
  const middleware = require("../middleware/middleware");
  const global = require("../controllers/global");
  const shopAdmin = require("../controllers/Admin/shop.admin");

  // ROLE ADMIN
  // Login
  app.post("/api/admin/login", global.LoginAdmin);
  // Edit password
  app.put(
    "/api/admin/edit-password",
    [middleware.verifyTokenAdmin, middleware.checkPasswordEdit],
    global.editPassword
  );
  // Create shop
  app.post(
    "/api/admin/create-shop",
    [middleware.checkCreateShop],
    shopAdmin.createShop
  );
  // Update shop
  app.put(
    "/api/admin/shop/:id",
    [middleware.checkCreateShop],
    shopAdmin.editShop
  );
  // Get list shop
  app.get("/api/admin/shop", shopAdmin.getListShop);
  // Get shop by Id
  app.get("/api/admin/shop/:id", shopAdmin.getShopById);
  // Delete shop
  app.delete("/api/admin/shop/:id", shopAdmin.deleteShop);
  // ROLE SHOP
  // Login
  app.post("/api/shop/login", global.LoginShop);
  // Edit password
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
