"use strict";

const { transaction } = require("objection");

const MenuController = require("../controllers/MenuController");

module.exports = router => {
  //* Create a new menu item *//
  router.post("/api/menuItem", MenuController.create);

  //* Read menu *//
  router.get("/api/menu", MenuController.getMenu);

  //* Read menu item *//
  router.get("/api/menuItem/:id", MenuController.getMenuItem);

  //* Update menu item*//
  router.put("/api/menuItem/:id", MenuController.updateMenuItem);

  //* Delete menu item*//
  router.delete("/api/menuItem/:id", MenuController.deleteMenuItem);
};
