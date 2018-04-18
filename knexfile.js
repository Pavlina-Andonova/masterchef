const config = require("./config/config");

module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: config.host,
      user: config.mysql.user,
      password: config.mysql.password,
      database: config.mysql.db
    }
  },

  production: {
    client: "mysql",
    connection: {
      host: config.host,
      user: config.mysql.user,
      password: config.mysql.password,
      database: config.mysql.db
    }
  }
};
