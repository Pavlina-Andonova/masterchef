const config = require("./config/config");
const _ = require("lodash");
const Knex = require("knex");
const morgan = require("morgan");
const express = require("express");
const Promise = require("bluebird");
const bodyParser = require("body-parser");
const cors = require("cors");
const promiseRouter = require("express-promise-router");
const path = require("path");
const knexConfig = require("./knexfile");
const registerApi = require("./routes");
const { Model } = require("objection");

// Initialize knex.
const knex = Knex(knexConfig.development);

// Bind all Models to a knex instance.
Model.knex(knex);

const router = promiseRouter();
const app = express()
  .use(bodyParser.json())
  .use(morgan("dev"))
  .use(express.static(path.join(__dirname, "dist")))
  .use(router)
  .use(cors({ origin: "*" }))
  .set("json spaces", 2);

// Register our REST API.
registerApi(router);
app.use("*", express.static(path.join(__dirname, "dist")));

app.use((err, req, res, next) => {
  if (err) {
    res
      .status(err.statusCode || err.status || 500)
      .send(err.data || err.message || {});
  } else {
    next();
  }
});

const server = app.listen(config.port, () => {
  console.log(`Application is listening at port ${server.address().port}`);
});
