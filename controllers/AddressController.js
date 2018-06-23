const Address = require("../models/Address");

//**Create Address */
const createAddress = async function(req, res) {
  res.setHeader("Content-Type", "application/json");
  const addressData = {
    ...req.body,
    profileId: req.user.id
  };

  const address = await Address.query().insert(addressData);
  if (!address) {
    return res.status(500).send({ error: "Somethig went wrong!" });
  }

  return res.send(address);
};
module.exports.createAddress = createAddress;

//**Get Addresses */
const getAddresses = async function(req, res) {
  res.setHeader("Content-Type", "application/json");
  const addresses = await Address.query().where({
    isRestaurant: false
  });
  if (!addresses) {
    return res.status(404).send({ error: "Not Found!" });
  }

  return res.send(addresses);
};
module.exports.getAddresses = getAddresses;

//**Get Address */
const getAddress = async function(req, res) {
  res.setHeader("Content-Type", "application/json");
  const address = await Address.query()
    .findById(req.params.id)
    .where({
      isRestaurant: false
    });
  if (!address) {
    return res.status(404).send({ error: "Not Found!" });
  }

  return res.send(address);
};
module.exports.getAddress = getAddress;

//**Update Address */
const updateAddress = async function(req, res) {
  res.setHeader("Content-Type", "application/json");
  const address = await Address.query().patchAndFetchById(
    req.params.id,
    req.body
  );
  if (!address) {
    return res.status(404).send({ error: "Not Found!" });
  }

  return res.send(address);
};

module.exports.updateAddress = updateAddress;

//**Delete Address */
const deleteAddress = async function(req, res) {
  res.setHeader("Content-Type", "application/json");
  const numberOfDeletedAddresses = await Address.query()
    .findById(req.params.id)
    .del();
  if (numberOfDeletedAddresses <= 0) {
    return res.status(404).send({ error: "Not Found!" });
  }
  return res.status(201).send();
};
module.exports.deleteAddress = deleteAddress;

//* Get Restaurants *//
const getResturants = async function(req, res) {
  res.setHeader("Content-Type", "application/json");
  const restaurants = await Address.query().where({
    isRestaurant: true
  });

  if (!restaurants) {
    return res.status(404).send({ error: "Not Found!" });
  }

  return res.send(restaurants);
};
module.exports.getResturants = getResturants;
