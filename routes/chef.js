"use strict";

const { transaction } = require("objection");
const passport = require("passport");
require("../middleware/passport")(passport);

const ChefController = require("../controllers/ChefController");

module.exports = router => {
  //* CREATE Chef *//
  router.post(
    "/api/chef",
    passport.authenticate("jwt", { session: false }),
    ChefController.createChef
  );

  /** READ Chefs */
  router.get("/api/chefs", ChefController.getChefs);

  /** READ Chef */
  router.get("/api/chef/:id", ChefController.getChef);

  /** UPDATE Chef */
  router.put(
    "/api/chef/:id",
    passport.authenticate("jwt", { session: false }),
    ChefController.updateChef
  );

  /** DELETE Chef */
  router.delete(
    "/api/chef/:id",
    passport.authenticate("jwt", { session: false }),
    ChefController.deleteChef
  );
};
