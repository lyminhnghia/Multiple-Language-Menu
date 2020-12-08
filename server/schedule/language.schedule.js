const dotenv = require("dotenv");
dotenv.config();
const key = process.env.KEY;
const { Translate } = require("@google-cloud/translate").v2;
const googleTranslate = new Translate({
  key: key,
});
const language = require("../configs/language");
const db = require("../models/index");
const Account = db.account;
const Restaurant = db.restaurant;
const Address = db.address;
const Category = db.category;
const Item = db.item;
const AddressLanguage = db.address_language;
const RestaurantInfo = db.restaurant_information;
const CategoryLanguage = db.category_language;
const ItemLanguage = db.item_language;

exports.UpdateState = async () => {
  try {
    let restaurants = await Restaurant.findAll({
      attributes: ["id", "end_contract"],
    });
    for (let i = 0; i < restaurants.length; i++) {
      if (Date.now() / 1000 > restaurants[i].end_contract) {
        Account.update(
          {
            state: 3,
          },
          {
            where: {
              restaurantId: restaurants[i].id,
            },
          }
        );
      }
    }
  } catch (error) {
    console.log(error);
  }
};

exports.RestaurantInfoSchedule = async () => {
  try {
    let restaurants = await Restaurant.findAll({
      where: {
        status_change: true,
      },
    });
    for (let i = 0; i < restaurants.length; i++) {
      for (let j = 1; j < 30; j++) {
        let restaurantInfos = await RestaurantInfo.findOne({
          where: {
            languageId: j,
            restaurantId: restaurants[i].id,
          },
        });
        let [newRestaurantType] = await googleTranslate.translate(
          restaurants[i].restaurant_type,
          language[j - 1].lang_code
        );
        let [newRestaurantName] = await googleTranslate.translate(
          restaurants[i].shop_name,
          language[j - 1].lang_code
        );
        if (restaurantInfos) {
          RestaurantInfo.update(
            {
              restaurant_type: newRestaurantType,
              restaurant_name: newRestaurantName,
            },
            {
              where: {
                id: restaurantInfos[i].id,
              },
            }
          );
        } else {
          RestaurantInfo.create({
            restaurant_type: newRestaurantType,
            restaurant_name: newRestaurantName,
            languageId: j,
            restaurantId: restaurants[i].id,
          });
        }
      }
      Restaurant.update(
        {
          status_change: false,
        },
        {
          where: {
            id: restaurants[i].id,
          },
        }
      );
    }
  } catch (error) {
    console.log(error);
  }
};

exports.AddressSchedule = async () => {
  try {
    let addresses = await Address.findAll({
      where: {
        status_change: true,
      },
    });
    for (let i = 0; i < addresses.length; i++) {
      for (let j = 1; j < 30; j++) {
        let restaurantInfo = await RestaurantInfo.findOne({
          where: {
            restaurantId: addresses[i].id,
            languageId: j,
          },
        });
        let addressLanguage = await AddressLanguage.findOne({
          where: {
            restaurantInformationId: restaurantInfo.id,
          },
        });
        let newPortNumber = addresses[i].port_number;
        let [newCity] = await googleTranslate.translate(
          addresses[i].city,
          language[j - 1].lang_code
        );
        let [newAddress] = await googleTranslate.translate(
          addresses[i].address,
          language[j - 1].lang_code
        );
        let [newBuilding] = await googleTranslate.translate(
          addresses[i].building,
          language[j - 1].lang_code
        );
        if (addressLanguage) {
          AddressLanguage.update(
            {
              port_number: newPortNumber,
              city: newCity,
              address: newAddress,
              building: newBuilding,
            },
            {
              where: {
                restaurantInformationId: restaurantInfo.id,
              },
            }
          );
        } else {
          AddressLanguage.create({
            port_number: newPortNumber,
            city: newCity,
            address: newAddress,
            building: newBuilding,
            restaurantInformationId: restaurantInfo.id,
          });
        }
      }
      Address.update(
        {
          status_change: false,
        },
        {
          where: {
            id: addresses[i].id,
          },
        }
      );
    }
  } catch (error) {
    console.log(error);
  }
};

exports.CategorySchedule = async () => {
  try {
    let categories = await Category.findAll({
      where: {
        status_change: true,
      },
    });
    for (let i = 0; i < categories.length; i++) {
      for (let j = 1; j < 30; j++) {
        let categoryLanguage = await CategoryLanguage.findOne({
          where: {
            languageId: j,
            categoryId: categories[i].id,
          },
        });
        let [newName] = await googleTranslate.translate(
          categories[i].name,
          language[j - 1].lang_code
        );
        let [newDescription] = await googleTranslate.translate(
          categories[i].description,
          language[j - 1].lang_code
        );
        if (categoryLanguage) {
          CategoryLanguage.update(
            {
              name: newName,
              description: newDescription,
            },
            {
              where: {
                id: categoryLanguage.id,
              },
            }
          );
        } else {
          CategoryLanguage.create({
            name: newName,
            description: newDescription,
            languageId: j,
            categoryId: categories[i].id,
          });
        }
      }
      Category.update(
        {
          status_change: false,
        },
        {
          where: {
            id: categories[i].id,
          },
        }
      );
    }
  } catch (error) {
    console.log(error);
  }
};
exports.ItemSchedule = async () => {
  try {
    let items = await Item.findAll({
      where: {
        status_change: true,
      },
    });
    for (let i = 0; i < items.length; i++) {
      for (let j = 1; j < 30; j++) {
        let itemLanguage = await ItemLanguage.findOne({
          where: {
            languageId: j,
            itemId: items[i].id,
          },
        });
        let [newName] = await googleTranslate.translate(
          items[i].name,
          language[j - 1].lang_code
        );
        let newCode = items[i].code;
        let newPrice = items[i].price;
        let newCurrencyUnit = items[i].currency_unit;
        let [newDescription] = await googleTranslate.translate(
          items[i].description,
          language[j - 1].lang_code
        );

        if (itemLanguage) {
          ItemLanguage.update(
            {
              name: newName,
              code: newCode,
              price: newPrice,
              currency_unit: newCurrencyUnit,
              description: newDescription,
            },
            {
              where: {
                id: itemLanguage.id,
              },
            }
          );
        } else {
          let categoryLanguage = await CategoryLanguage.findOne({
            where: {
              categoryId: items[i].categoryId,
              languageId: j,
            },
          });
          ItemLanguage.create({
            name: newName,
            code: newCode,
            price: newPrice,
            currency_unit: newCurrencyUnit,
            description: newDescription,
            itemId: items[i].id,
            languageId: j,
            categoryLanguageId: categoryLanguage.id,
          });
        }
      }
      Item.update(
        {
          status_change: false,
        },
        {
          where: {
            id: items[i].id,
          },
        }
      );
    }
  } catch (error) {
    console.log(error);
  }
};
