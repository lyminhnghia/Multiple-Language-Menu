const bcrypt = require("bcryptjs");
const db = require("../../models/index");
const Shop = db.shop;
const Owner = db.owner;
const Address = db.address;
const Account = db.account;
const Language = db.language;
const SortLanguage = db.sort_language;
const PaymentMethod = db.payment_method;
const Op = db.Sequelize.Op;

exports.createShop = async (req, res) => {
  try {
    let shop = await Shop.findOne({
      where: {
        shop_name: req.body.shop_name,
      },
    });
    if (shop) {
      return res.status(400).send({
        success: false,
        error: "Shop name already exist!",
      });
    }
    let account = await Account.findOne({
      where: {
        username: req.body.shopID,
      },
    });
    if (account) {
      return res.status(400).send({
        success: false,
        error: "Shop ID already exist!",
      });
    }
    res.status(200).send({ success: true, data: "Created shop successful!" });
    let newShop = await Shop.create({
      shop_type: req.body.shop_type,
      shop_name: req.body.shop_name,
      start_contract: req.body.start_contract,
      end_contract: req.body.end_contract,
      email: req.body.email_shop,
      telephone: req.body.telephone_shop,
      status_change: true,
    });

    Account.create({
      username: req.body.shopID,
      password: bcrypt.hashSync(req.body.password, 8),
      state: req.body.state,
      role: false,
      shopId: newShop.id,
    });
    Owner.create({
      company_name: req.body.company_name,
      address: req.body.address_owner,
      telephone: req.body.telephone_owner,
      staff_name: req.body.staff_name,
      email: req.body.email_owner,
      shopId: newShop.id,
    });
    Address.create({
      port_number: req.body.port_number,
      city: req.body.city,
      address: req.body.address_shop,
      building: req.body.building,
      status_change: true,
      shopId: newShop.id,
    });
    let language = await Language.findAll();
    for (let i = 0; i < language.length; i++) {
      SortLanguage.create({
        shopId: newShop.id,
        languageId: language[i].id,
        sort_order: language[i].sort_order,
      });
    }
    PaymentMethod.create({
      shopId: newShop.id,
      cash: false,
      credit_card: false,
      app: false,
      etc: false,
    });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};

exports.editShop = async (req, res) => {
  try {
    let shop = await Shop.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!shop) {
      return res.status(400).send({
        success: false,
        error: "Shop does not exist!",
      });
    }
    let account = await Account.findOne({
      where: {
        username: req.body.shopID,
      },
    });
    if (account.shopId !== shop.id) {
      return res.status(400).send({
        success: false,
        error: "Shop ID already exist!",
      });
    }
    res.status(200).send({ success: true, data: "Updated shop successful!" });
    await Shop.update(
      {
        shop_type: req.body.shop_type,
        shop_name: req.body.shop_name,
        start_contract: req.body.start_contract,
        end_contract: req.body.end_contract,
        email: req.body.email_shop,
        telephone: req.body.telephone_shop,
        status_change: true,
      },
      {
        where: {
          id: shop.id,
        },
      }
    );

    await Account.update(
      {
        state: req.body.state,
      },
      {
        where: {
          shopId: shop.id,
        },
      }
    );
    await Owner.update(
      {
        company_name: req.body.company_name,
        address: req.body.address_owner,
        telephone: req.body.telephone_owner,
        staff_name: req.body.staff_name,
        email: req.body.email_owner,
      },
      {
        where: {
          shopId: shop.id,
        },
      }
    );
    await Address.update(
      {
        port_number: req.body.port_number,
        city: req.body.city,
        address: req.body.address_shop,
        building: req.body.building,
        status_change: true,
      },
      {
        where: {
          shopId: shop.id,
        },
      }
    );
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};

exports.getListShop = async (req, res) => {
  try {
    let filter = req.query.filter ? req.query.filter : "";
    let from = req.query.from ? parseInt(req.query.from) : 0;
    let to = req.query.to ? parseInt(req.query.to) : 9223372036854775807;
    let page = parseInt(req.query.page);
    let limit = 10;
    let shopData = await Shop.findAndCountAll({
      limit: limit,
      offset: (page - 1) * limit,
      where: {
        shop_name: {
          [Op.like]: `%${filter}%`,
        },
        end_contract: {
          [Op.between]: [from, to],
        },
      },
      attributes: ["id", "shop_name", "start_contract", "end_contract"],
      include: [
        {
          model: Owner,
          attributes: ["company_name", "address", "staff_name", "telephone"],
        },
        {
          model: Account,
          attributes: ["username", "state"],
        },
      ],
    });

    let formData = {};
    formData.success = true;
    formData.total = shopData.count;
    formData.data = shopData.rows;

    res.status(200).send(formData);
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};

exports.getShopById = async (req, res) => {
  try {
    let shop = await Shop.findOne({
      where: {
        id: req.params.id,
      },
      attributes: [
        "shop_type",
        "shop_name",
        "start_contract",
        "end_contract",
        "email",
        "telephone",
      ],
      include: [
        {
          model: Account,
          attributes: ["username", "state"],
        },
        {
          model: Owner,
          attributes: [
            "company_name",
            "address",
            "telephone",
            "staff_name",
            "email",
          ],
        },
        {
          model: Address,
          attributes: ["port_number", "city", "address", "building"],
        },
      ],
    });
    if (!shop) {
      return res
        .status(400)
        .send({ success: false, error: "Shop does not exist!" });
    }
    res.status(200).send({ success: true, data: shop });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};

exports.deleteShop = async (req, res) => {
  try {
    let shop = await Shop.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!shop) {
      return res
        .status(400)
        .send({ success: false, error: "Shop does not exist!" });
    }
    await Shop.destroy({
      where: {
        id: req.params.id,
      },
    });
    await Account.destroy({
      where: {
        shopId: req.params.id,
      },
    });
    await Owner.destroy({
      where: {
        shopId: req.params.id,
      },
    });
    await Address.destroy({
      where: {
        shopId: req.params.id,
      },
    });
    res.status(200).send({ success: true, error: "Deleted is successful!" });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};
