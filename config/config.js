const Joi = require("joi");
require("dotenv").config();

const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string()
    .allow(["development", "production", "test", "provision"])
    .default("development"),
  PORT: Joi.number().default(4000),
  JWT_SECRET: Joi.string()
    .required()
    .description("JWT Secret required to sign"),
  JWT_TOKEN_EXPIRATION_TIME: Joi.number().default(5000),
  MYSQL_DB: Joi.string()
    .required()
    .description("MySQL database name"),
  MYSQL_HOST: Joi.string().default("localhost"),
  MYSQL_USER: Joi.string()
    .required()
    .description("MySQL username"),
  MYSQL_PASSWORD: Joi.string()
    .allow("")
    .description("MySQL password")
})
  .unknown()
  .required();

const { error, value: envVars } = Joi.validate(process.env, envVarsSchema);
if (error) {
  throw new Error('Config validation error: ' + error.message);
}

const config = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  jwtSecret: envVars.JWT_SECRET,
  tokenExpirationTime: envVars.JWT_TOKEN_EXPIRATION_TIME,
  mysql: {
    db: envVars.MYSQL_DB,
    host: envVars.MYSQL_HOST,
    user: envVars.MYSQL_USER,
    password: envVars.MYSQL_PASSWORD
  }
};

module.exports = config;
