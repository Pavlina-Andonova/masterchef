"use strict";

const { transaction } = require("objection");

const ProfileController = require("../controllers/ProfileController");

module.exports = router => {
  //* Favourites *//
  //* Add new item*//
  router.post("/api/favourites/add", ProfileController.addMenuItemToFavourites);

  //* Get item*//
  router.get("/api/favourites", ProfileController.getFavouriteMenuItems);

  //* Remove item*//
  router.delete("/api/favourites/remove", ProfileController.removeMenuItemFromFavourites);
};
