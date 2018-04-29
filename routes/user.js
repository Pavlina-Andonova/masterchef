"use strict";

const { transaction } = require("objection");
const passport = require("passport");
require("../middleware/passport")(passport);

const UserController = require("../controllers/UserController");

module.exports = router => {
  //* Create User *//
  router.post("/api/users", UserController.create);
  
  /** READ User */
  router.get(
    "/api/users",
    passport.authenticate("jwt", { session: false }),
    UserController.get
  );

  /** UPDATE User */
  router.put(
    "/api/users",
    passport.authenticate("jwt", { session: false }),
    UserController.update
  );

  /** DELETE User */
  router.delete(
    "/api/users",
    passport.authenticate("jwt", { session: false }),
    UserController.remove
  );

  /** LOGIN User */
  router.post("/api/users/login", UserController.login);
};
