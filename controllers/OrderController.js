const { transaction } = require("objection");

const Order = require("../models/Order");
const OrderMenuItem = require("../models/OrderMenuItem");

//**Create Order */
const createOrder = async function(req, res) {
  // res.setHeader("Content-Type", "application/json");
  const orderData = {
    ...req.body,
    profileId: req.user.id
  };

  let orderMenuItems = req.body.menuItems.map(item => {
    return {
      itemCount: item.count,
      menuItemId: item.id
    };
  });

  delete orderData.menuItems;
  orderData.items = orderMenuItems;

  const order = await transaction(Order.knex(), trx => {
    return Order.query(trx)
      .allowInsert("items")
      .insertGraph(orderData);
  });

  if (order) {
    return res.send({ message: "Order added successfully!" });
  } else {
    return res.status(500).send({ error: "Somethig went wrong!" });
  }
};
module.exports.createOrder = createOrder;

//**Get Orders */
const getOrders = async function(req, res) {
  res.setHeader("Content-Type", "application/json");
  const orders = await Order.query().eager("[address, items, items.itemData]");
  if (!orders) {
    return res.status(404).send({ error: "Not Found!" });
  }

  return res.send(orders);
};
module.exports.getOrders = getOrders;

//**Get Order */
const getOrder = async function(req, res) {
  // res.setHeader("Content-Type", "application/json");
  const order = await Order.query()
    .findById(req.params.id)
    .eager("[address, items, items.itemData]");

  if (!order) {
    return res.status(404).send({ error: "Not Found!" });
  }

  return res.send(order);
};
module.exports.getOrder = getOrder;
