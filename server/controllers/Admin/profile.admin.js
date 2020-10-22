const db = require("../../models/index");
const Account = db.account;

exports.readProfile = async (req, res) => {
  try {
    let profile = await Account.findOne({
      where: {
        id: req.userId,
      },
      attributes: ["username", "email", "state", "role"],
    });
    if (!profile) {
      return res
        .status(400)
        .send({ success: false, error: "Account does not exist!" });
    }

    res.status(200).send({ success: true, data: profile });
  } catch (error) {
    res.status(500).send({ success: false, error: message.error });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    let profile = await Account.findOne({
      where: {
        id: req.userId,
      },
    });
    if (!profile) {
      return res
        .status(400)
        .send({ success: false, error: "Account does not exist!" });
    }
    await Account.update(
      {
        email: req.body.email,
      },
      {
        where: {
          id: req.userId,
        },
      }
    );

    res
      .status(200)
      .send({ success: true, data: "Updated profile admin is successful!" });
  } catch (error) {
    res.status(500).send({ success: false, error: message.error });
  }
};
