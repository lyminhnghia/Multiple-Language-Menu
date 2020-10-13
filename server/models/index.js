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
db.order = require("./language.model")(sequelize, Sequelize);
db.owner = require("./owner.model")(sequelize, Sequelize);
db.payment_method = require("./payment_method.model")(sequelize, Sequelize);
db.shop_information = require("./shop_information.model")(sequelize, Sequelize);
db.shop = require("./shop.model")(sequelize, Sequelize);
db.working_shift_language = require("./working_shift_language.model")(
  sequelize,
  Sequelize
);
db.working_shift = require("./working_shift.model")(sequelize, Sequelize);

module.exports = db;
