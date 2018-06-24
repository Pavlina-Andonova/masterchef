"use strict";

const Model = require("objection").Model;

class Profile extends Model {
  static get tableName() {
    return "profiles";
  }

  static get jsonSchema() {
    return {
      type: "object",

      properties: {
        id: { type: "integer" },
        firstName: { type: "string", default: "" },
        lastName: { type: "string", default: "" },
        isAdmin: { type: "boolean", defaults: false },
        birthdate: { type: "date" },
        profileImage: {
          type: "string",
          default: "/assets/imgs/profile-pic.png"
        }
      }
    };
  }
}

module.exports = Profile;
