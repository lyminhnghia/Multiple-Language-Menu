const db = require("../../models/index");
const Item = db.item;

exports.createItem = async (req, res) => {
  try {
    let item = await Item.findOne({
      where: {
        name: req.body.name,
        categoryId: req.body.categoryId,
      },
    });
    if (item) {
      return res
        .status(400)
        .send({ success: false, error: "Item already exists!" });
    }
    let newItem = await Item.create({
      image_item: req.body.image,
      name: req.body.name,
      code: req.body.code,
      price: req.body.price,
      currency_unit: req.body.currency_unit,
      description: req.body.description,
      status_change: true,
      categoryId: req.body.categoryId,
    });

    res.status(200).send({ success: true, data: newItem });
  } catch (error) {
    res.status(500).send({ success: false, error: error });
  }
};

exports.updateItem = async (req, res) => {
  try {
    let item = await Item.findOne({
      where: {
        name: req.body.name,
        categoryId: req.body.categoryId,
      },
    });
    if (item && item.id != req.params.id) {
      return res
        .status(400)
        .send({ success: false, error: "Item already exists!" });
    }
    await Item.update(
      {
        image_item: req.body.image,
        name: req.body.name,
        code: req.body.code,
        price: req.body.price,
        currency_unit: req.body.currency_unit,
        description: req.body.description,
        categoryId: req.body.categoryId,
        status_change: true,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).send({ success: true, data: "Updated successful!" });
  } catch (error) {
    res.status(500).send({ success: false, error: error });
  }
};

exports.getItem = async (req, res) => {
  try {
    let item = await Item.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!item) {
      return res
        .status(400)
        .send({ success: false, error: "Item does not exists!" });
    }
    res.status(200).send({ success: true, data: item });
  } catch (error) {
    res.status(500).send({ success: false, error: error });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    let item = await Item.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!item) {
      return res
        .status(400)
        .send({ success: false, error: "Item does not exists!" });
    }
    await Item.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send({ success: true, data: "Deleted is successful!" });
  } catch (error) {
    res.status(500).send({ success: false, error: error });
  }
};
