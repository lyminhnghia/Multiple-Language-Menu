const rateLimit = require("express-rate-limit");
const multer = require("multer");
const path = require("path");

module.exports = (app) => {
  const middleware = require("../middleware/middleware");
  const global = require("../controllers/global");
  const restaurantAdmin = require("../controllers/Admin/restaurant.admin");
  const profileAdmin = require("../controllers/Admin/profile.admin");
  const profileRestaurant = require("../controllers/Restaurant/profile.restaurant");
  const categoryRestaurant = require("../controllers/Restaurant/category.restaurant");
  const itemRestaurant = require("../controllers/Restaurant/item.restaurant");
  const limiter = rateLimit({
    windowMs: 15 * 1000,
    max: 15,
  });
  const imageUploader = multer({ dest: "images/" });
  // ROLE ADMIN
  // Login
  app.post("/api/admin/login", global.LoginAdmin);
  // Edit password
  app.put(
    "/api/admin/edit-password",
    [middleware.verifyTokenAdmin, middleware.checkPasswordEdit],
    global.editPassword
  );
  // Create restaurant
  app.post(
    "/api/admin/create-restaurant",
    limiter,
    [middleware.verifyTokenAdmin, middleware.checkCreateRestaurant],
    restaurantAdmin.createRestaurant
  );
  // Update restaurant
  app.put(
    "/api/admin/restaurant/:id",
    limiter,
    [middleware.verifyTokenAdmin, middleware.checkUpdateRestaurant],
    restaurantAdmin.editRestaurant
  );
  // Get list restaurant
  app.get(
    "/api/admin/restaurant",
    [middleware.verifyTokenAdmin],
    restaurantAdmin.getListRestaurant
  );
  // Get restaurant by Id
  app.get(
    "/api/admin/restaurant/:id",
    [middleware.verifyTokenAdmin],
    restaurantAdmin.getRestaurantById
  );
  // Delete restaurant
  app.delete(
    "/api/admin/restaurant/:id",
    [middleware.verifyTokenAdmin],
    restaurantAdmin.deleteRestaurant
  );
  app.get(
    "/api/admin/profile",
    [middleware.verifyTokenAdmin],
    profileAdmin.readProfile
  );
  // ROLE RESTAURANT
  // Login
  app.post("/api/restaurant/login", limiter, global.LoginRestaurant);
  // Edit password
  app.put(
    "/api/restaurant/edit-password",
    limiter,
    [middleware.verifyTokenRestaurant, middleware.checkPasswordEdit],
    global.editPassword
  );

  // get Contract Restaurant
  app.get(
    "/api/restaurant/contract",
    [middleware.verifyTokenRestaurant],
    profileRestaurant.getContractRestaurant
  );
  // get list language
  app.get(
    "/api/restaurant/list-language",
    [middleware.verifyTokenRestaurant],
    profileRestaurant.getLanguage
  );
  // sort Language
  app.put(
    "/api/restaurant/sort-language",
    [middleware.verifyTokenRestaurant],
    profileRestaurant.sortLanguage
  );
  // get Profile Restaurant
  app.get(
    "/api/restaurant/profile",
    [middleware.verifyTokenRestaurant],
    profileRestaurant.getProfilebyRestaurant
  );
  // update Profile Restaurant
  app.put(
    "/api/restaurant/update-restaurant",
    [middleware.verifyTokenRestaurant],
    profileRestaurant.updateProfilebyRestaurant
  );
  // Create Category
  app.post(
    "/api/restaurant/create-category",
    [middleware.checkCategory, middleware.verifyTokenRestaurant],
    categoryRestaurant.createCategory
  );
  // Update Category
  app.put(
    "/api/restaurant/category/:id",
    [middleware.checkCategory, middleware.verifyTokenRestaurant],
    categoryRestaurant.updateCategory
  );
  // Get list Category
  app.get(
    "/api/restaurant/category",
    [middleware.verifyTokenRestaurant],
    categoryRestaurant.getListCategory
  );
  // Get Category by Id
  app.get(
    "/api/restaurant/category/:id",
    [middleware.verifyTokenRestaurant],
    categoryRestaurant.getCategory
  );
  // Delete Category
  app.delete(
    "/api/restaurant/category/:id",
    [middleware.verifyTokenRestaurant],
    categoryRestaurant.deleteCategory
  );
  // Create Item
  app.post(
    "/api/restaurant/create-item",
    [middleware.checkItem, middleware.verifyTokenRestaurant],
    itemRestaurant.createItem
  );
  // Update Item
  app.put(
    "/api/restaurant/item/:id",
    [middleware.verifyTokenRestaurant],
    itemRestaurant.updateItem
  );
  // Get Item by Id
  app.get(
    "/api/restaurant/item/:id",
    [middleware.verifyTokenRestaurant],
    itemRestaurant.getItem
  );
  // Delete Item
  app.delete(
    "/api/restaurant/item/:id",
    [middleware.verifyTokenRestaurant],
    itemRestaurant.deleteItem
  );
  // Create QRCode
  app.post("/api/restaurant/create-qrcode", profileRestaurant.createQRCode);
  // Get QRCode
  app.get(
    "/api/restaurant/qrcode",
    [middleware.verifyTokenRestaurant],
    profileRestaurant.getQRCode
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
  const RestaurantInterval = () => {
    LanguageSchedule.RestaurantInfoSchedule();
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
  setInterval(RestaurantInterval, 1000 * 60 * 60 * 24);
  setInterval(AddressInterval, 1000 * 60 * 60 * 24);
  setInterval(CategoryInterval, 1000 * 60 * 60 * 24);
  setInterval(ItemInterval, 1000 * 60 * 60 * 24);
};
