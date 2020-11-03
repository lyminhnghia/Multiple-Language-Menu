const db = require("../../models/index");
const Category = db.category;
const Item = db.item;

exports.createCategory = async (req, res) => {
  try {
    let category = await Category.findOne({
      where: {
        name: req.body.name,
        shopId: req.shopId,
      },
    });
    if (category) {
      return res
        .status(400)
        .send({ success: false, error: "Category already exists!" });
    }
    let newCategory = await Category.create({
      name: req.body.name,
      description: req.body.description,
      status_change: true,
      shopId: req.shopId,
    });

    res.status(200).send({ success: true, data: newCategory });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    let category = await Category.findOne({
      where: {
        name: req.body.name,
        shopId: req.shopId,
      },
    });
    if (category && category.id != req.params.id) {
      return res
        .status(400)
        .send({ success: false, error: "Category already exists!" });
    }
    await Category.update(
      {
        name: req.body.name,
        description: req.body.description,
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
    res.status(500).send({ success: false, error: error.message });
  }
};

exports.getCategory = async (req, res) => {
  try {
    let category = await Category.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!category) {
      return res
        .status(400)
        .send({ success: false, error: "Category does not exists!" });
    }
    res.status(200).send({ success: true, data: category });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};

exports.getListCategory = async (req, res) => {
  try {
    let listCategory = await Category.findAll({
      where: {
        shopId: req.shopId,
      },
      include: [
        {
          model: Item,
        },
      ],
    });
    res.status(200).send({
      success: true,
      data: listCategory,
    });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    let category = await Category.findOne({
      where: {
        id: req.params.id,
        shopId: req.shopId,
      },
    });
    if (!category) {
      return res
        .status(400)
        .send({ success: false, error: "Category does not exists!" });
    }
    await Category.destroy({
      where: {
        id: req.params.id,
        shopId: req.shopId,
      },
    });
    res.status(200).send({ success: true, data: "Deleted is successful!" });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
};
