"use strict";

const Model = require("objection").Model;
const MenuCategory = require("./MenuCategory");

class MenuItem extends Model {
  // Table name is the only required property.
  static get tableName() {
    return "menuItems";
  }

  // Optional JSON schema. This is not the database schema! Nothing is generated
  // based on this. This is only used for validation. Whenever a model instance
  // is created it is checked against this schema. http://json-schema.org/.
  static get jsonSchema() {
    return {
      type: "object",
      required: [
        "categoryId",
        "title",
        "description",
        "price",
        "weight",
        "menuItemImage"
      ],

      properties: {
        id: { type: "integer" },
        categoryId: { type: "integer" },
        title: { type: "string", minLength: 3, maxLength: 30 },
        description: { type: "string" },
        price: { type: "float" },
        weight: { type: "integr" },
        menuItemImage: { type: "string" }
      }
    };
  }

  static get relationMappings() {
    return {
      category: {
        relation: Model.BelongsToOneRelation,
        modelClass: MenuCategory,
        join: {
          from: "menuItems.categoryId",
          to: "menuCategories.id"
        }
      }
    };
  }
}

module.exports = MenuItem;
