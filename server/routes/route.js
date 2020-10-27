const rateLimit = require("express-rate-limit");
module.exports = (app) => {
  const middleware = require("../middleware/middleware");
  const global = require("../controllers/global");
  const shopAdmin = require("../controllers/Admin/shop.admin");
  const profileShop = require("../controllers/Shop/profile.shop");
  const CategoryShop = require("../controllers/Shop/category.shop");
  const ItemShop = require("../controllers/Shop/item.shop");
  const limiter = rateLimit({
    windowMs: 15 * 1000,
    max: 15,
  });
  // ROLE ADMIN
  // Login
  app.post("/api/admin/login", limiter, global.LoginAdmin);
  // Edit password
  app.put(
    "/api/admin/edit-password",
    limiter,
    [middleware.verifyTokenAdmin, middleware.checkPasswordEdit],
    global.editPassword
  );
  // Create shop
  app.post(
    "/api/admin/create-shop",
    limiter,
    [middleware.checkCreateShop],
    shopAdmin.createShop
  );
  // Update shop
  app.put(
    "/api/admin/shop/:id",
    limiter,
    [middleware.checkUpdateShop],
    shopAdmin.editShop
  );
  // Get list shop
  app.get("/api/admin/shop", limiter, shopAdmin.getListShop);
  // Get shop by Id
  app.get("/api/admin/shop/:id", limiter, shopAdmin.getShopById);
  // Delete shop
  app.delete("/api/admin/shop/:id", limiter, shopAdmin.deleteShop);
  // ROLE SHOP
  // Login
  app.post("/api/shop/login", limiter, global.LoginShop);
  // Edit password
  app.put(
    "/api/shop/edit-password",
    limiter,
    [middleware.verifyTokenShop, middleware.checkPasswordEdit],
    global.editPassword
  );

  // get Contract Shop
  app.get(
    "/api/shop/contract",
    [middleware.verifyTokenShop],
    profileShop.getContractShop
  );
  // get list language
  app.get(
    "/api/shop/list-language",
    [middleware.verifyTokenShop],
    profileShop.getLanguage
  );
  // sort Language
  app.put(
    "/api/shop/sort-language",
    [middleware.verifyTokenShop],
    profileShop.sortLanguage
  );
  // get Profile Shop
  app.get(
    "/api/shop/profile",
    [middleware.verifyTokenShop],
    profileShop.getProfilebyShop
  );
  // update Profile Shop
  app.put(
    "/api/shop/update-shop",
    [middleware.verifyTokenShop],
    profileShop.updateProfilebyShop
  );
  // Create Category
  app.post(
    "/api/shop/create-category",
    [middleware.checkCategory],
    CategoryShop.createCategory
  );
  // Update Category
  app.put(
    "/api/shop/category/:id",
    [middleware.checkCategory],
    CategoryShop.updateCategory
  );
  // Get list Category
  app.get(
    "/api/shop/category",
    [middleware.verifyTokenShop],
    CategoryShop.getListCategory
  );
  // Get Category by Id
  app.get("/api/shop/category/:id", CategoryShop.getCategory);
  // Delete Category
  app.delete("/api/shop/category/:id", CategoryShop.deleteCategory);
  // Create Item
  app.post("/api/shop/create-item", ItemShop.createItem);
  // Update Item
  app.put("/api/shop/item/:id", ItemShop.updateItem);
  // Get Item by Id
  app.get("/api/shop/item/:id", ItemShop.getItem);
  // Delete Item
  app.delete("/api/shop/item/:id", ItemShop.deleteItem);
  // Create QRCode
  app.post("/api/shop/create-qrcode", profileShop.createQRCode);
  // Get QRCode
  app.get(
    "/api/shop/qrcode",
    [middleware.verifyTokenShop],
    profileShop.getQRCode
  );

  const LanguageSchedule = require("../schedule/language.schedule");

  const StateInterval = () => {
    LanguageSchedule.UpdateState();
  };
  const ShopInterval = () => {
    LanguageSchedule.ShopInfoSchedule();
  };
  const AddressInterval = () => {
    LanguageSchedule.AddressSchedule();
  };
  const CategoryInterval = () => {
    LanguageSchedule.CategorySchedule();
  };
  const ItemInterval = () => {
    LanguageSchedule.ItemSchedule();
  };
  setInterval(StateInterval, 1000 * 60 * 10);
  setInterval(ShopInterval, 1000 * 60 * 60 * 24);
  setInterval(AddressInterval, 1000 * 60 * 60 * 24);
  setInterval(CategoryInterval, 1000 * 60 * 60 * 24);
  setInterval(ItemInterval, 1000 * 60 * 60 * 24);
};
