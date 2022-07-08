const express = require("express");
const app = express();
require('dotenv').config();
const redis = require("redis");
const utils = require("utils");
const PORT = process.env.PORT || 5000;

app.use(express.json());

const redisUrl = "redis://127.0.0.1:6379";
const client = redis.createClient(redisUrl);
client.set = utils.promisify(client.set);

app.post("/", async (req, res) => {
   const { name, number } = req.body;
   const response = await client.SET(name, number);
   res.json(response);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});