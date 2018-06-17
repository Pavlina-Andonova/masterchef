"use strict";

const Model = require("objection").Model;

class Address extends Model {
  static get tableName() {
    return "addresses";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["city", "street", "buildingType", "number", "floor"],

      properties: {
        id: { type: "integer" },
        city: { type: "string" },
        street: { type: "string" },
        buildingType: { type: "string" },
        number: { type: "integer" },
        entry: { type: "string" },
        floor: { type: "integer" },
        isRestaurant: { type: "boolean" },
        apartment: { type: "string" }
      }
    };
  }
}

module.exports = Address;
