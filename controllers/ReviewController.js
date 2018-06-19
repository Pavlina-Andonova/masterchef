const Chef = require("../models/Chef");

//**Create Chef */
const createChef = async function(req, res) {
  res.setHeader("Content-Type", "application/json");
  const chef = await Chef.query().insert(req.body);
  if (!chef) {
    return res.status(500).send({ error: "Somethig went wrong!" });
  }

  return res.send(chef);
};
module.exports.createChef = createChef;

//**Get Chefs */
const getChefs = async function(req, res) {
  res.setHeader("Content-Type", "application/json");
  const chefs = await Chef.query();
  if (!chefs) {
    return res.status(404).send({ error: "Not Found!" });
  }

  return res.send(chefs);
};
module.exports.getChefs = getChefs;

//**Get Chef */
const getChef = async function(req, res) {
  res.setHeader("Content-Type", "application/json");
  const chef = await Chef.query().findById(req.params.id);
  if (!chef) {
    return res.status(404).send({ error: "Not Found!" });
  }

  return res.send(chef);
};
module.exports.getChef = getChef;

//**Update Chef */
const updateChef = async function(req, res) {
  res.setHeader("Content-Type", "application/json");
  const chef = await Chef.query().patchAndFetchById(req.params.id, req.body);
  if (!chef) {
    return res.status(404).send({ error: "Not Found!" });
  }

  return res.send(chef);
};

module.exports.updateChef = updateChef;

//**Delete Chef */
const deleteChef = async function(req, res) {
  res.setHeader("Content-Type", "application/json");
  const numberOfDeletedChefs = await Chef.query()
    .findById(req.params.id)
    .del();
  if (numberOfDeletedChefs <= 0) {
    return res.status(404).send({ error: "Not Found!" });
  }
  return res.status(201).send();
};
module.exports.deleteChef = deleteChef;
