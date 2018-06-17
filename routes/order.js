"use strict";

const { transaction } = require("objection");
const passport = require("passport");
require("../middleware/passport")(passport);

const OrderController = require("../controllers/OrderController");

module.exports = router => {
  // * CREATE Order *//
  router.post(
    "/api/order",
    passport.authenticate("jwt", { session: false }),
    OrderController.createOrder
  );

  // /**GET Orders */
  router.get(
    "/api/orders",
    passport.authenticate("jwt", { session: false }),
    OrderController.getOrders
  );

  // /** GET Order */
  router.get(
    "/api/order/:id",
    passport.authenticate("jwt", { session: false }),
    OrderController.getOrder
  );
};
