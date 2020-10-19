const db = require("../../models/index");
const Category = db.category;
const Item = db.item;

exports.createCategory = async (req, res) => {
  try {
    let category = await Category.findOne({
      where: {
        name: req.body.name,
        shopId: req.body.shopId,
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
      shopId: req.body.shopId,
    });

    res.status(200).send({ success: true, data: newCategory });
  } catch (error) {
    res.status(500).send({ success: false, error: error });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    let category = await Category.findOne({
      where: {
        name: req.body.name,
        shopId: req.body.shopId,
      },
    });
    if (category) {
      return res
        .status(400)
        .send({ success: false, error: "Category already exists!" });
    }
    let newCategory = await Category.update(
      {
        name: req.body.name,
        description: req.body.description,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).send({ success: true, data: newCategory });
  } catch (error) {
    res.status(500).send({ success: false, error: error });
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
    res.status(500).send({ success: false, error: error });
  }
};

exports.getListCategory = async (req, res) => {
  try {
    let listCategory = await Category.findAndCountAll({
      where: {
        shopId: req.body.shopId,
      },
      include: [
        {
          model: Item,
        },
      ],
    });
    res.status(200).send({
      success: true,
      total: listCategory.count,
      data: listCategory.rows,
    });
  } catch (error) {
    res.status(500).send({ success: false, error: error });
  }
};

exports.deleteCategory = async (req, res) => {
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
    await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send({ success: true, data: "Deleted is successful!" });
  } catch (error) {
    res.status(500).send({ success: false, error: error });
  }
};
