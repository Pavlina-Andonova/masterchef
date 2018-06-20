"use strict";

const Model = require("objection").Model;
const Profile = require("./Profile");

class Review extends Model {
  static get tableName() {
    return "reviews";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["reviewText"],

      properties: {
        id: { type: "integer" },
        menuItemId: { type: "integer" },
        profileId: { type: "integer" },
        reviewText: { type: "string" },
        date: { type: "datetime" }
      }
    };
  }
  static get relationMappings() {
    return {
      category: {
        relation: Model.BelongsToOneRelation,
        modelClass: Profile,
        join: {
          from: "reviews.profileId",
          to: "profiles.id"
        }
      }
    };
  }
}

module.exports = Review;
