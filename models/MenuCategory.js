"use strict";

const Model = require("objection").Model;

class MenuCategory extends Model {
  static get tableName() {
    return "menuCategories";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["categoryType","name","image"],

      properties: {
        id: { type: "integer" },
        categoryType: { type: 'string'},
        name: { type: "string" },
        image: { type: "string" },
        description: { type: "string", defaults: '' }
      }
    };
  }
}

module.exports = MenuCategory;
