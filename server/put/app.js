const express = require("express");
const PORT = process.env.PORT || 3000;
const Users = require("./Model/userSchema");
const cors = require("cors");

const dotenv = require("dotenv");
const connect = require("./connect");
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
connect();

app.post("/update", async (req, res) => {
  try {
    const { _id } = req.body;
    let user = await Users.updateOne({ _id }, req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(PORT, () => console.log(`put listening at port ${PORT}`));
