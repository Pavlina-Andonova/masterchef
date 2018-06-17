const { transaction } = require("objection");

const MenuItem = require("../models/MenuItem");

//Create a new menuItem
const create = async function(req, res) {
  const menuItem = await transaction(MenuItem.knex(), () => {
    return MenuItem.query().insert(req.body).eager('category');
  });

  return res.send(menuItem);
};

module.exports.create = create;

/**
 * Get all MenuItems
 *
 * @param {*} req
 * @param {*} res
 */
const getMenu = async function(req, res) {
  res.setHeader("Content-Type", "application/json");
  const menu = await transaction(MenuItem.knex(), () => {
    return MenuItem.query().eager('category');
  });

  return res.send(menu);
};

module.exports.getMenu = getMenu;

const getMenuGroup = async function(req, res) {
  res.setHeader("Content-Type", "application/json");
  if (req.body.menuItems && req.body.menuItems.length > 0) {
    const menuItems = await transaction(MenuItem.knex(), () => {
      return MenuItem.query().findByIds(req.body.menuItems.map(item => item.id)).eager('category');
    });

    const result = req.body.menuItems.map(item => {
      const itemData = menuItems.find(currentItem => currentItem.id === item.id);

      return {
        ...item,
        ...itemData
      };
    });

    return res.send(result);
  } else {
    return res.send([]);
  }
};

module.exports.getMenuGroup = getMenuGroup;

/**
 * Get a Menu Item
 *
 * @param {*} req
 * @param {*} res
 */
const getMenuItem = async function(req, res) {
  res.setHeader("Content-Type", "application/json");
  const menuItem = await transaction(MenuItem.knex(), () => {
    return MenuItem.query().findById(req.params.id).eager('category');
  });
  if (!menuItem) {
    return res.status(404).send({ error: "Menu Item not found!" });
  }
  return res.send(menuItem);
};

module.exports.getMenuItem = getMenuItem;

/**
 * Udate a Menu Item
 *
 * @param {*} req
 * @param {*} res
 */
const updateMenuItem = async function(req, res) {
  res.setHeader("Content-Type", "application/json");
  const updatedMenuItem = await transaction(MenuItem.knex(), () => {
    return MenuItem.query().patchAndFetchById(req.params.id, req.body).eager('category');
  });
  if (!updatedMenuItem) {
    return res.status(404).send({ error: "Menu Item not found!" });
  }
  return res.send(updatedMenuItem);
};

module.exports.updateMenuItem = updateMenuItem;

/**
 * Delete a Menu Item
 *
 * @param {*} req
 * @param {*} res
 */
const deleteMenuItem = async function(req, res) {
  res.setHeader("Content-Type", "application/json");
  const numberOfDeletedMenuItems = await transaction(MenuItem.knex(), () => {
    return MenuItem.query().deleteById(req.params.id);
  });
  console.log(numberOfDeletedMenuItems);
  if (numberOfDeletedMenuItems === 0) {
    return res.status(404).send({ error: "Menu Item not found!" });
  }
  return res.send();
};

module.exports.deleteMenuItem = deleteMenuItem;
