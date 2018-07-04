"use strict";

const { transaction } = require("objection");
const passport = require("passport");
require("../middleware/passport")(passport);
const upload = require("../middleware/multerUpload")(
  "src/assets/imgs/uploads/userImages"
);

const ProfileController = require("../controllers/ProfileController");
const UserController = require("../controllers/UserController");

module.exports = router => {
  //*Get profle*//
  router.get(
    "/api/profile",
    passport.authenticate("jwt", { session: false }),
    ProfileController.getProfile
  );

  //*Update profle*//
  router.put(
    "/api/profile",
    passport.authenticate("jwt", { session: false }),
    ProfileController.updateProfile
  );

  //*Get user email*//
  router.get(
    "/api/profile/email",
    passport.authenticate("jwt", { session: false }),
    UserController.getUserEmail
  );

  //*Update user email*//
  router.put(
    "/api/profile/email",
    passport.authenticate("jwt", { session: false }),
    UserController.updateUserEmail
  );

  //*Update user password*//
  router.put(
    "/api/profile/password",
    passport.authenticate("jwt", { session: false }),
    UserController.updateUserPassword
  );

  //* Favourites *//
  //* Add new item*//
  router.post(
    "/api/favourites/add",
    passport.authenticate("jwt", { session: false }),
    ProfileController.addMenuItemToFavourites
  );

  //* Get item*//
  router.get(
    "/api/favourites",
    passport.authenticate("jwt", { session: false }),
    ProfileController.getFavouriteMenuItems
  );

  //* Remove item*//
  router.post(
    "/api/favourites/remove",
    passport.authenticate("jwt", { session: false }),
    ProfileController.removeMenuItemFromFavourites
  );

  //* Image *//

  router.post(
    "/api/profile/image",
    upload.single("avatar"),
    ProfileController.uploadProfileImage
  );
};
