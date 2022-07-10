const express = require("express");

const hotelRoute = express.Router();

hotelRoute.route("/").get((req, res) => {
  res.status(200).send("This is hotel main page");
});

hotelRoute.route("/details").get((req, res) => {
  res.status(200).send("This is a hotel detial page");
});

module.exports = hotelRoute;
