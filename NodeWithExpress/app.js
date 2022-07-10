const express = require("express");
const app = express();
const port = 9877;
const hotelRouter = require("./src/routes/hotelRouter"); // using express router
const cityRouter = require("./src/routes/cityRouter");

//health check
app.get("/health", (req, res) => {
  res.status(200).send("Health is ok");
});

app.get("/", (req, res) => {
  res.status(200).send("Node with express");
});

app.use("/city", cityRouter);

app.use("/hotel", hotelRouter);

app.listen(port, (error, data) => {
  if (error) throw error;
  console.log("server is running on port 9877");
});

// const http = require("http");

// const server = http.createServer();

// server.listen(7777);
