const bcrypt = require("bcryptjs");
const db = require("../../models/index");
const Restaurant = db.restaurant;
const Owner = db.owner;
const Address = db.address;
const Account = db.account;
const Language = db.language;
const SortLanguage = db.sort_language;
const PaymentMethod = db.payment_method;
const Op = db.Sequelize.Op;

exports.createRestaurant = async (req, res) => {
  try {
    let restaurant = await Restaurant.findOne({
      where: {
        restaurant_name: req.body.restaurant_name,
      },
    });
    if (restaurant) {
      return res.status(400).send({
        success: false,
        error: "Restaurant name already exist!",
      });
    }
    let account = await Account.findOne({
      where: {
        username: req.body.restaurantID,
      },
    });
    if (account) {
      return res.status(400).send({
        success: false,
        error: "Restaurant ID already exist!",
      });
    }
    res
      .status(200)
      .send({ success: true, data: "Created restaurant successful!" });
    let newRestaurant = await Restaurant.create({
      restaurant_type: req.body.restaurant_type,
      restaurant_name: req.body.restaurant_name,
      start_contract: req.body.start_contract,
      end_contract: req.body.end_contract,
      email: req.body.email_restaurant,
      telephone: req.body.telephone_restaurant,
      status_change: true,
    });

    Account.create({
      username: req.body.restaurantID,
      password: bcrypt.hashSync(req.body.password, 8),
      state: req.body.state,
      role: false,
      restaurantId: newRestaurant.id,
    });
    Owner.create({
      company_name: req.body.company_name,
      address: req.body.address_owner,
      telephone: req.body.telephone_owner,
      staff_name: req.body.staff_name,
      email: req.body.email_owner,
      restaurantId: newRestaurant.id,
    });
    Address.create({
      port_number: req.body.port_number,
      city: req.body.city,
      address: req.body.address_restaurant,
      building: req.body.building,
      status_change: true,
      restaurantId: newRestaurant.id,
    });
    let language = await Language.findAll();
    for (let i = 0; i < language.length; i++) {
      SortLanguage.create({
        restaurantId: newRestaurant.id,
        languageId: language[i].id,
        sort_order: language[i].sort_order,
      });
    }
    PaymentMethod.create({
      restaurantId: newRestaurant.id,
      cash: false,
      credit_card: false,
      app: false,
      etc: false,
    });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};

exports.editRestaurant = async (req, res) => {
  try {
    let restaurant = await Restaurant.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!restaurant) {
      return res.status(400).send({
        success: false,
        error: "Restaurant does not exist!",
      });
    }
    res
      .status(200)
      .send({ success: true, data: "Update restaurant successful!" });
    await Restaurant.update(
      {
        restaurant_type: req.body.restaurant_type,
        restaurant_name: req.body.restaurant_name,
        start_contract: req.body.start_contract,
        end_contract: req.body.end_contract,
        email: req.body.email_restaurant,
        telephone: req.body.telephone_restaurant,
        status_change: true,
      },
      {
        where: {
          id: restaurant.id,
        },
      }
    );

    await Account.update(
      {
        state: req.body.state,
      },
      {
        where: {
          restaurantId: restaurant.id,
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
          restaurantId: restaurant.id,
        },
      }
    );
    await Address.update(
      {
        port_number: req.body.port_number,
        city: req.body.city,
        address: req.body.address_restaurant,
        building: req.body.building,
        status_change: true,
      },
      {
        where: {
          restaurantId: restaurant.id,
        },
      }
    );
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};

exports.getListRestaurant = async (req, res) => {
  try {
    let filter = req.query.filter ? req.query.filter : "";
    let from = req.query.from ? parseInt(req.query.from) : 0;
    let to = req.query.to ? parseInt(req.query.to) : 9223372036854775807;
    let page = parseInt(req.query.page);
    let limit = 10;
    let restaurantData = await Restaurant.findAndCountAll({
      limit: limit,
      offset: (page - 1) * limit,
      where: {
        restaurant_name: {
          [Op.like]: `%${filter}%`,
        },
        end_contract: {
          [Op.between]: [from, to],
        },
      },
      attributes: ["id", "restaurant_name", "start_contract", "end_contract"],
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
    formData.total = restaurantData.count;
    formData.data = restaurantData.rows;

    res.status(200).send(formData);
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};

exports.getRestaurantById = async (req, res) => {
  try {
    let restaurant = await Restaurant.findOne({
      where: {
        id: req.params.id,
      },
      attributes: [
        "restaurant_type",
        "restaurant_name",
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
    if (!restaurant) {
      return res
        .status(400)
        .send({ success: false, error: "Restaurant does not exist!" });
    }
    res.status(200).send({ success: true, data: restaurant });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};

exports.deleteRestaurant = async (req, res) => {
  try {
    let restaurant = await Restaurant.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!restaurant) {
      return res
        .status(400)
        .send({ success: false, error: "Restaurant does not exist!" });
    }
    await Restaurant.destroy({
      where: {
        id: req.params.id,
      },
    });
    await Account.destroy({
      where: {
        restaurantId: req.params.id,
      },
    });
    await Owner.destroy({
      where: {
        restaurantId: req.params.id,
      },
    });
    await Address.destroy({
      where: {
        restaurantId: req.params.id,
      },
    });
    res.status(200).send({ success: true, error: "Deleted is successful!" });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};
