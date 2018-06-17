"use strict";

const registerUserRoutes = require("./user");
const registerMenuRoutes = require("./menu");
const registerProfileRoutes = require("./profile");
const registerChefRoutes = require("./chef");
const registerOrderRoutes = require("./order");

module.exports = router => {
  registerUserRoutes(router);
  registerMenuRoutes(router);
  registerProfileRoutes(router);
  registerChefRoutes(router);
  registerOrderRoutes(router);
};
