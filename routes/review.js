"use strict";

const { transaction } = require("objection");
const passport = require("passport");
require("../middleware/passport")(passport);

const ReviewController = require("../controllers/ReviewController");

module.exports = router => {
  //* CREATE Review *//
  router.post(
    "/api/review",
    passport.authenticate("jwt", { session: false }),
    ReviewController.createReview
  );

  /** READ Reviews */
  router.get("/api/reviews", ReviewController.getReviews);

//   /** READ Chef */
//   router.get("/api/chef/:id", ChefController.getChef);

//   /** UPDATE Chef */
//   router.put(
//     "/api/chef/:id",
//     passport.authenticate("jwt", { session: false }),
//     ChefController.updateChef
//   );

//   /** DELETE Chef */
//   router.delete(
//     "/api/chef/:id",
//     passport.authenticate("jwt", { session: false }),
//     ChefController.deleteChef
//   );
};
