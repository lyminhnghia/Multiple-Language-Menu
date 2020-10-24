const dotenv = require("dotenv");
dotenv.config();
const key = process.env.KEY;
const { Translate } = require("@google-cloud/translate").v2;
const googleTranslate = new Translate({
  key: key,
});
const language = require("../configs/language");
const db = require("../models/index");
const Shop = db.shop;
const Address = db.address;
const Category = db.category;
const Item = db.item;
const AddressLanguage = db.address_language;
const ShopInfo = db.shop_information;
const CategoryLanguage = db.category_language;
const ItemLanguage = db.item_language;

exports.ShopInfoSchedule = async () => {
  try {
    let shops = await Shop.findAll({
      where: {
        status_change: true,
      },
    });
    for (let i = 0; i < shops.length; i++) {
      for (let j = 1; j < 30; j++) {
        let shopInfos = await ShopInfo.findOne({
          where: {
            languageId: j,
            shopId: shops[i].id,
          },
        });
        let [newShopType] = await googleTranslate.translate(
          shops[i].shop_type,
          language[j - 1].lang_code
        );
        let [newShopName] = await googleTranslate.translate(
          shops[i].shop_name,
          language[j - 1].lang_code
        );
        if (shopInfos) {
          ShopInfo.update(
            {
              shop_type: newShopType,
              shop_name: newShopName,
            },
            {
              where: {
                id: shopInfos[i].id,
              },
            }
          );
        } else {
          ShopInfo.create({
            shop_type: newShopType,
            shop_name: newShopName,
            languageId: j,
            shopId: shops[i].id,
          });
        }
      }
      Shop.update(
        {
          status_change: false,
        },
        {
          where: {
            id: shops[i].id,
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
        let shopInfo = await ShopInfo.findOne({
          where: {
            shopId: addresses[i].id,
            languageId: j,
          },
        });
        let addressLanguage = await AddressLanguage.findOne({
          where: {
            shopInformationId: shopInfo.id,
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
                shopInformationId: shopInfo.id,
              },
            }
          );
        } else {
          AddressLanguage.create({
            port_number: newPortNumber,
            city: newCity,
            address: newAddress,
            building: newBuilding,
            shopInformationId: shopInfo.id,
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
