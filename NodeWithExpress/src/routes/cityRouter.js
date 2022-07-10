const express = require("express");

const cityRouter = express.Router();

cityRouter.route("/").get((req, res) => {
  res.status(200).send("This is City main page");
});

cityRouter.route("/details").get((req, res) => {
  res.status(200).send("This is a city detail page");
});

module.exports = cityRouter;
