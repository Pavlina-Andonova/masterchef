"use strict";

const { transaction } = require("objection");
const passport = require("passport");
require("../middleware/passport")(passport);

const ProfileController = require("../controllers/ProfileController");

module.exports = router => {
  //* Favourites *//
  //* Add new item*//
  router.post("/api/favourites/add", ProfileController.addMenuItemToFavourites);

  //* Get item*//
  router.get("/api/favourites", passport.authenticate("jwt", { session: false }), ProfileController.getFavouriteMenuItems);

  //* Remove item*//
  router.delete("/api/favourites/remove", ProfileController.removeMenuItemFromFavourites);
};
