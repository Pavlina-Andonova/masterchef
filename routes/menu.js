"use strict";

const MenuController = require("../controllers/MenuController");
const CategoryController = require("../controllers/CategoryController");


module.exports = router => {
  //* Create a new menu item *//
  router.post("/api/menuItem", MenuController.create);

  //* Read menu *//
  router.get("/api/menu", MenuController.getMenu);

  //* Get group of menu items *//
  router.post("/api/menu/group", MenuController.getMenuGroup);

  //* Read menu item *//
  router.get("/api/menuItem/:id", MenuController.getMenuItem);

  //* Update menu item*//
  router.put("/api/menuItem/:id", MenuController.updateMenuItem);

  //* Delete menu item*//
  router.delete("/api/menuItem/:id", MenuController.deleteMenuItem);

  //*Create Categories *//
  router.post("/api/categories", CategoryController.createCategory);

  //*Get Categories *//
  router.get("/api/categories", CategoryController.getCategories);

  //*Get Category *//
  router.get("/api/category/:id", CategoryController.getCategory);
};
