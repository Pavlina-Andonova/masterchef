"use strict";

const Model = require("objection").Model;

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
      required: ["type","title","description","price","weight","menuItemImage"],

      properties: {
        id: { type: "integer" },
        type: { type: 'string'},
        title: { type: "string", minLength: 3, maxLength: 30 },
        description: { type: "string" },
        price: { type: "float" },
        weight: { type: 'integr'},
        menuItemImage: { type: "string" }
      }
    };
  }

  // static get relationMappings() {
  //   return {
  //     actors: {
  //       relation: Model.ManyToManyRelation,
  //       // The related model. This can be either a Model subclass constructor or an
  //       // absolute file path to a module that exports one. We use the file path version
  //       // here to prevent require loops.
  //       modelClass: __dirname + "/Person",
  //       join: {
  //         from: "movies.id",
  //         // ManyToMany relation needs the `through` object to describe the join table.
  //         through: {
  //           from: "persons_movies.movieId",
  //           to: "persons_movies.personId"
  //         },
  //         to: "persons.id"
  //       }
  //     }
  //   };
  // }
}

module.exports = MenuItem;
