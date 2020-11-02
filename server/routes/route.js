const rateLimit = require("express-rate-limit");
const multer = require("multer");
const path = require("path");

module.exports = (app) => {
  const middleware = require("../middleware/middleware");
  const global = require("../controllers/global");
  const shopAdmin = require("../controllers/Admin/shop.admin");
  const profileAdmin = require("../controllers/Admin/profile.admin");
  const profileShop = require("../controllers/Shop/profile.shop");
  const CategoryShop = require("../controllers/Shop/category.shop");
  const ItemShop = require("../controllers/Shop/item.shop");
  const limiter = rateLimit({
    windowMs: 15 * 1000,
    max: 15,
  });
  const imageUploader = multer({ dest: "images/" });
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
    [middleware.verifyTokenAdmin, middleware.checkCreateShop],
    shopAdmin.createShop
  );
  // Update shop
  app.put(
    "/api/admin/shop/:id",
    limiter,
    [middleware.verifyTokenAdmin, middleware.checkUpdateShop],
    shopAdmin.editShop
  );
  // Get list shop
  app.get(
    "/api/admin/shop",
    [middleware.verifyTokenAdmin],
    limiter,
    shopAdmin.getListShop
  );
  // Get shop by Id
  app.get(
    "/api/admin/shop/:id",
    [middleware.verifyTokenAdmin],
    limiter,
    shopAdmin.getShopById
  );
  // Delete shop
  app.delete(
    "/api/admin/shop/:id",
    [middleware.verifyTokenAdmin],
    limiter,
    shopAdmin.deleteShop
  );
  app.get(
    "/api/admin/profile",
    [middleware.verifyTokenAdmin],
    profileAdmin.readProfile
  );
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
    [middleware.checkCategory, middleware.verifyTokenShop],
    CategoryShop.createCategory
  );
  // Update Category
  app.put(
    "/api/shop/category/:id",
    [middleware.checkCategory, middleware.verifyTokenShop],
    CategoryShop.updateCategory
  );
  // Get list Category
  app.get(
    "/api/shop/category",
    [middleware.verifyTokenShop],
    CategoryShop.getListCategory
  );
  // Get Category by Id
  app.get(
    "/api/shop/category/:id",
    [middleware.verifyTokenShop],
    CategoryShop.getCategory
  );
  // Delete Category
  app.delete(
    "/api/shop/category/:id",
    [middleware.verifyTokenShop],
    CategoryShop.deleteCategory
  );
  // Create Item
  app.post(
    "/api/shop/create-item",
    [middleware.checkItem, middleware.verifyTokenShop],
    ItemShop.createItem
  );
  // Update Item
  app.put(
    "/api/shop/item/:id",
    [middleware.verifyTokenShop],
    ItemShop.updateItem
  );
  // Get Item by Id
  app.get("/api/shop/item/:id", [middleware.verifyTokenShop], ItemShop.getItem);
  // Delete Item
  app.delete(
    "/api/shop/item/:id",
    [middleware.verifyTokenShop],
    ItemShop.deleteItem
  );
  // Create QRCode
  app.post("/api/shop/create-qrcode", profileShop.createQRCode);
  // Get QRCode
  app.get(
    "/api/shop/qrcode",
    [middleware.verifyTokenShop],
    profileShop.getQRCode
  );
  // Post Image
  app.post("/api/upload", [imageUploader.single("file")], global.UploadImage);
  // Get Image
  app.get("/api/image/:name", (req, res) => {
    const fileName = req.params.name;
    if (!fileName) {
      return res.status(400).send({
        success: false,
        data: "No filename specified",
      });
    }
    res.status(200).sendFile(path.resolve(`./images/${fileName}`));
  });

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
