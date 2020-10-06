const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

app.get("/", function (req, res) {
  res.send("Server is running!");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
