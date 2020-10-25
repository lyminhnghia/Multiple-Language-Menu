const dotenv = require("dotenv");
dotenv.config();
const Sequelize = require("sequelize");

const env = process.env.NODE_ENV || "development";
const config = require("../configs/config.json")[env];

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.account = require("./account.model")(sequelize, Sequelize);
db.address_language = require("./address_language.model")(sequelize, Sequelize);
db.address = require("./address.model")(sequelize, Sequelize);
db.category_language = require("./category_language.model")(
  sequelize,
  Sequelize
);
db.category = require("./category.model")(sequelize, Sequelize);
db.item_language = require("./item_language.model")(sequelize, Sequelize);
db.item = require("./item.model")(sequelize, Sequelize);
db.language = require("./language.model")(sequelize, Sequelize);
db.order = require("./order.model")(sequelize, Sequelize);
db.owner = require("./owner.model")(sequelize, Sequelize);
db.payment_method = require("./payment_method.model")(sequelize, Sequelize);
db.shop_information = require("./shop_information.model")(sequelize, Sequelize);
db.shop = require("./shop.model")(sequelize, Sequelize);
db.working_shift = require("./working_shift.model")(sequelize, Sequelize);
db.sort_language = require("./sort_language.model")(sequelize, Sequelize);
db.customer = require("./customer.model")(sequelize, Sequelize);
db.title_language = require("./title_language.model")(sequelize, Sequelize);

// Join shop with owner
db.shop.hasOne(db.owner);
db.owner.belongsTo(db.shop);
// Join shop with account
db.shop.hasOne(db.account);
db.account.belongsTo(db.shop);
// Join shop with payment method
db.shop.hasOne(db.payment_method);
db.payment_method.belongsTo(db.shop);
// Join shop with address
db.shop.hasOne(db.address);
db.address.belongsTo(db.shop);
// Join shop with working shift
db.shop.hasMany(db.working_shift);
db.working_shift.belongsTo(db.shop);
// Join shop with shop information
db.shop.hasMany(db.shop_information);
db.shop_information.belongsTo(db.shop);
// Join shop with sort language
db.shop.hasMany(db.sort_language);
db.sort_language.belongsTo(db.shop);
// Join language with sort language
db.language.hasMany(db.sort_language);
db.sort_language.belongsTo(db.language);
// Join shop information with address language
db.shop_information.hasOne(db.address_language);
db.address_language.belongsTo(db.shop_information);
// Join shop with category
db.shop.hasMany(db.category);
db.category.belongsTo(db.shop);
// Join category with item
db.category.hasMany(db.item);
db.item.belongsTo(db.category);
// Join category with category language
db.category.hasMany(db.category_language);
db.category_language.belongsTo(db.category);
// Join category language with item language
db.category_language.hasMany(db.item_language);
db.item_language.belongsTo(db.category_language);
// Join item with item language
db.item.hasMany(db.item_language);
db.item_language.belongsTo(db.item);
// Join item with order
db.item.hasMany(db.order);
db.order.belongsTo(db.item);
// Join language with shop information
db.language.hasMany(db.shop_information);
db.shop_information.belongsTo(db.language);
// Join language with category language
db.language.hasMany(db.category_language);
db.category_language.belongsTo(db.language);
// Join language with item language
db.language.hasMany(db.item_language);
db.item_language.belongsTo(db.language);
// Join customer with order
db.customer.hasMany(db.order);
db.order.belongsTo(db.customer);
// Join language to title language
db.language.hasMany(db.title_language);
db.title_language.belongsTo(db.language);

module.exports = db;
