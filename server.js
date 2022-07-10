const express = require("express");
const app = express();
require('dotenv').config();
const redis = require("redis");
const util = require("util");
const PORT = process.env.PORT || 5000;

app.use(express.json());
const redisUrl = "redis://127.0.0.1:6379";
const client = redis.createClient(redisUrl); 
client.set = util.promisify(client.set);

client.on("error", (err) => {
    console.log("Error", err)
});

client.on("connect", () => {
    console.log("Redis is connected");
})

app.post("/", async (req, res) => {
   const { name, number } = req.body;

    //await client.connect();
   //We are able to use async/await here bc we added promisify
   const response = await client.SET(name, number);
   res.json(response);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


