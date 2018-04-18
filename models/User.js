const Password = require('objection-password')();
const Model = require('objection').Model;
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const Profile = require('./Profile');

class User extends Password(Model) {
  static get tableName() {
    return 'users';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['email', 'password'],

      properties: {
        id: { type: 'integer' },
        email: { type: 'string' },
        password: { type: 'string' },
        passwordResetExpirationDate: { type: 'date' },
        passwordResetToken: { type: 'string' }
      }
    };
  }

  static get relationMappings() {
    return {
      profile: {
        relation: Model.BelongsToOneRelation,
        modelClass: Profile,
        join: {
          from: 'users.profileId',
          to: 'profiles.id'
        }
      }
    }
  }

  getJWT() {
    return {
      user: this.email,
      token: 'Bearer ' + jwt.sign({ userId: this.id }, config.jwtSecret, { expiresIn: config.tokenExpirationTime })
    };
  };
}

module.exports = User;
