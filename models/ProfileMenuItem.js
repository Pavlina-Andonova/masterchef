"use strict";

const Model = require("objection").Model;

class ProfileMenuItem extends Model {
  // Table name is the only required property.
  static get tableName() {
    return "profiles_menuItems";
  }

  static get jsonSchema() {
    return {
      type: "object",
      properties: {
        profileId: { type: "integer" },
        menuItemId: { type: "integer" }
      }
    };
  }
}

module.exports = ProfileMenuItem;