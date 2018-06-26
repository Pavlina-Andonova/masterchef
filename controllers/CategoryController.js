const MenuCategory = require("../models/MenuCategory");

//**Create Categories */
const createCategory = async function(req, res) {
  res.setHeader("Content-Type", "application/json");
  const categories = await MenuCategory.query().insert(req.body);

  if (!categories) {
    return res.status(500).send({ error: "Something went wrong!" });
  }

  return res.send(categories);
};
module.exports.createCategory = createCategory;

//**Get Categories */
const getCategories = async function(req, res) {
  res.setHeader("Content-Type", "application/json");
  const categories = await MenuCategory.query();
  if (!categories) {
    return res.status(404).send({ error: "Not Found!" });
  }

  return res.send(categories);
};
module.exports.getCategories = getCategories;

//**Get Category */
const getCategory = async function(req, res) {
  res.setHeader("Content-Type", "application/json");
  const category = await MenuCategory.query().findById(req.params.id);
  if (!category) {
    return res.status(404).send({ error: "Not Found!" });
  }

  return res.send(category);
};
module.exports.getCategory = getCategory;
