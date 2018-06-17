"use strict";

const passport = require("passport");
require("../middleware/passport")(passport);

const AddressController = require("../controllers/AddressController");

module.exports = router => {
  //* CREATE Address *//
  router.post(
    "/api/address",
    passport.authenticate("jwt", { session: false }),
    AddressController.createAddress
  );

  /** READ Addresses */
  router.get(
    "/api/addresses",
    passport.authenticate("jwt", { session: false }),
    AddressController.getAddresses
  );

  /** READ Address */
  router.get(
    "/api/address/:id",
    passport.authenticate("jwt", { session: false }),
    AddressController.getAddress
  );

  /** UPDATE Address */
  router.put(
    "/api/address/:id",
    passport.authenticate("jwt", { session: false }),
    AddressController.updateAddress
  );

  /** DELETE Chef */
  router.delete(
    "/api/address/:id",
    passport.authenticate("jwt", { session: false }),
    AddressController.deleteAddress
  );

  /** READ Restaurants */
  router.get("/api/restaurants", AddressController.getResturants);
};
