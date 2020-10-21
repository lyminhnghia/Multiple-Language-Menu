const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./models/index");
const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

require("./routes/route")(app);
const LanguageSchedule = require("./schedule/language.schedule");
db.sequelize
  .sync()
  .then(async () => {
    await LanguageSchedule.createLanguage();
    LanguageSchedule.createElementTranslate();
    console.log("Sequelize is Running");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.get("/", function (req, res) {
  res.send("Server is running!");
});

const port = process.env.PORT || 5000;
app.listen(port);
