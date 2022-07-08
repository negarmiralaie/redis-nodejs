const express = require("express");
const app = express();
require('dotenv').config();
const redis = require("redis");
const PORT = process.env.PORT || 5000;

const redisUrl = "redis://127.0.0.1:6379";
const client = redis.createClient(redisUrl);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});