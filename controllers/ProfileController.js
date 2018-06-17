const ProfileMenuItem = require("../models/ProfileMenuItem");
const MenuItem = require("../models/MenuItem");
const Profile = require("../models/Profile");

//* Get Profile *//
const getProfile = async function(req, res) {
  res.setHeader("Content-Type", "application/json");

  return res.send(req.user);
};
module.exports.getProfile = getProfile;

//*Update Profile *//
const updateProfile = async function(req, res) {
  res.setHeader("Content-Type", "application/json");
  const user = await Profile.query().patchAndFetchById(req.user.id, req.body);
  if (!user) {
    return res.status(404).send({ error: "User not found!" });
  }

  return res.send(user);
};
module.exports.updateProfile = updateProfile;

const addMenuItemToFavourites = async function(req, res) {
  res.setHeader("Content-Type", "application/json");
  if (req.user && req.user.id) {
    console.log(req.user.id);
    let profileMenuItemData = await ProfileMenuItem.query()
      .first()
      .where({
        profileId: req.user.id,
        menuItemId: req.body.menuItemId
      });

    if (!profileMenuItemData) {
      profileMenuItemData = await ProfileMenuItem.query().insert({
        profileId: req.user.id,
        menuItemId: req.body.menuItemId
      });
    }
    return res.send({
      message: "MenuItem added successfully to Favourites!",
      result: true
    });
  }

  return res.send({ result: false });
};
module.exports.addMenuItemToFavourites = addMenuItemToFavourites;

const getFavouriteMenuItems = async function(req, res) {
  const menuItemsData = await ProfileMenuItem.query()
    .select("menuItemId")
    .where({
      profileId: req.user.id
    });

  const menuItemsIds = menuItemsData.map(menuItem => {
    return menuItem.menuItemId;
  });

  const menuItems = await MenuItem.query().whereIn("id", menuItemsIds);

  return res.send(menuItems);
};
module.exports.getFavouriteMenuItems = getFavouriteMenuItems;

const removeMenuItemFromFavourites = async function(req, res) {
  res.setHeader("Content-Type", "application/json");
  if (req.user && req.user.id) {
    profileMenuItemData = await ProfileMenuItem.query()
      .delete()
      .where({
        profileId: req.user.id,
        menuItemId: req.body.menuItemId
      });

    return res.send({
      message: "MenuItem removed successfully from Favourites!",
      result: false
    });
  }

  return res.send({ result: false });
};
module.exports.removeMenuItemFromFavourites = removeMenuItemFromFavourites;
