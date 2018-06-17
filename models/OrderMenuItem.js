"use strict";

const Model = require("objection").Model;
const MenuItem = require("./MenuItem");

class OrderMenuItem extends Model {
  static get tableName() {
    return "orders_menuItems";
  }

  static get jsonSchema() {
    return {
      type: "object",
      properties: {
        orderId: { type: "integer" },
        menuItemId: { type: "integer" },
        itemCount: { type: "integer" }
      }
    };
  }

  static get relationMappings() {
    return {
      itemData: {
        relation: Model.BelongsToOneRelation,
        modelClass: MenuItem,
        join: {
          from: 'orders_menuItems.menuItemId',
          to: 'menuItems.id'
        }
      }
    };
  }
}

module.exports = OrderMenuItem;