"use strict";

const Model = require("objection").Model;
const MenuItem = require("./MenuItem");
const OrderMenuItem = require("./OrderMenuItem");
const Address = require("./Address");

class Order extends Model {
  static get tableName() {
    return "orders";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["addressId", "paymentMethod", "totalPrice", "orderDate"],

      properties: {
        id: { type: "integer" },
        addressId: { type: "integer" },
        profileId: { type: "integer" },
        paymentMethod: { type: "string", defaulTo: "Home" },
        totalPrice: { type: "string" },
        orderDate: { type: "datetime" },
        additionalInfo: {type:"string"}
      }
    };
  }
  static get relationMappings() {
    return {
      items: {
        relation: Model.HasManyRelation,
        modelClass: OrderMenuItem,
        join: {
          from: 'orders_menuItems.orderId',
          to: 'orders.id'
        }
      },
      address: {
        relation: Model.BelongsToOneRelation,
        modelClass: Address,
        join: {
          from: 'orders.addressId',
          to: 'addresses.id'
        }
      }
    };
  }
}

module.exports = Order;
