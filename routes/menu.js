"use strict";

const { transaction } = require("objection");

const MenuController = require("../controllers/MenuController");

module.exports = router => {
  //* Create a new menu item *//
  router.post("/menuItem", MenuController.create);

  //* Read menu *//
  router.get("/menu", MenuController.getMenu);

  //* Read menu item *//
  router.get("/menuItem/:id", MenuController.getMenuItem);

  //* Update menu item*//
  router.put("/menuItem/:id", MenuController.updateMenuItem);

  //* Delete menu item*//
  router.delete("/menuItem/:id", MenuController.deleteMenuItem);
};
