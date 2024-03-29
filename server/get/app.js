const express = require("express");
const PORT = process.env.PORT || 3001;
const dotenv = require("dotenv");
const connect = require("./connect");
const Users = require("./Model/userSchema");
const cors = require("cors");
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
connect();

app.get("/users", async (req, res) => {
  try {
    let users = await Users.find({});
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(PORT, () => console.log(`get listening at port ${PORT}`));
