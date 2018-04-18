'use strict';

const Model = require('objection').Model;

class Profile extends Model {
  static get tableName() {
    return 'profiles';
  }

  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        id: { type: 'integer' },
        firstName: { type: 'string', default: '' },
        lastName: { type: 'string', default: '' },
        birthdate: { type: 'date' },
        profileImage: { type: 'string', default: 'https://www.freeiconspng.com/uploads/profile-icon-9.png' }
      }
    };
  }
}

module.exports = Profile;
