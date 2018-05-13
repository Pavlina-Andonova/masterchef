const ProfileMenuItem = require("../models/ProfileMenuItem");
const MenuItem = require("../models/MenuItem");

const addMenuItemToFavourites = async function(req, res) {
  //   res.setHeader("Content-Type", "application/json");
  let profileMenuItemData = await ProfileMenuItem.query()
    .first()
    .where({
      profileId: req.body.profileId,
      menuItemId: req.body.menuItemId
    });

  if (!profileMenuItemData) {
    profileMenuItemData = await ProfileMenuItem.query().insert(req.body);
  }

  return res.send({ message: "MenuItem added successfully to Favourites!" });
};
module.exports.addMenuItemToFavourites = addMenuItemToFavourites;

const getFavouriteMenuItems = async function(req, res) {
  const menuItemsData = await ProfileMenuItem.query().select('menuItemId').where({
    profileId: 2
  });

  const menuItemsIds = menuItemsData.map((menuItem)=>{
    return menuItem.menuItemId;
  })
  const menuItems = await MenuItem.query().whereIn('id',menuItemsIds);

  return res.send(menuItems);
};
module.exports.getFavouriteMenuItems = getFavouriteMenuItems;

const removeMenuItemFromFavourites = async function(req, res) {
  res.setHeader("Content-Type", "application/json");
  profileMenuItemData = await ProfileMenuItem.query()
    .delete()
    .where({
      profileId: req.body.profileId,
      menuItemId: req.body.menuItemId
    });
  return res.send({
    message: "MenuItem removed successfully from Favourites!"
  });
};
module.exports.removeMenuItemFromFavourites = removeMenuItemFromFavourites;
