"use strict";

const Model = require("objection").Model;

class Chef extends Model {
  static get tableName() {
    return "chefs";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "description", "jobPosition", "description", "image"],

      properties: {
        id: { type: "integer" },
        name: { type: "string" },
        jobPosition: { type: "string" },
        description: { type: "string" },
        image: { type: "string" }
      }
    };
  }
}

module.exports = Chef;
