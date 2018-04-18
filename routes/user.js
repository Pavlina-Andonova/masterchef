"use strict";

const { transaction } = require("objection");
const passport = require("passport");
require("../middleware/passport")(passport);

const UserController = require("../controllers/UserController");

module.exports = router => {
  //* Create User *//
  router.post("/users", UserController.create);
  
  /** READ User */
  router.get(
    "/users",
    passport.authenticate("jwt", { session: false }),
    UserController.get
  );

  /** UPDATE User */
  router.put(
    "/users",
    passport.authenticate("jwt", { session: false }),
    UserController.update
  );

  /** DELETE User */
  router.delete(
    "/users",
    passport.authenticate("jwt", { session: false }),
    UserController.remove
  );

  /** LOGIN User */
  router.post("/users/login", UserController.login);
};
