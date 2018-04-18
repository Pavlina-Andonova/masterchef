const { transaction } = require("objection");

const User = require("../models/User");
const Profile = require("../models/Profile");

//Create a new user and set the email to his profile
const create = async function(req, res) {
  res.setHeader("Content-Type", "application/json");

  const user = await User.query()
    .first()
    .where({ email: req.body.email });

  if (user) {
    return res.status(409).send({ error: "Email already exists!" });
  }

  const graph = req.body;
  graph.profile = {
    firstName: req.body.email.split("@")[0]
  };

  const insertedGraph = await transaction(User.knex(), trx => {
    return User.query(trx)
      .allowInsert("[profile]")
      .insertGraph(graph);
  });

  return res.send(insertedGraph);
};

module.exports.create = create;

const get = async function(req, res) {
  res.setHeader("Content-Type", "application/json");
  return res.send(req.user);
};
module.exports.get = get;

const update = async function(req, res) {
  res.setHeader("Content-Type", "application/json");
  if (req.body.email) {
    const user = await User.query()
      .first()
      .where({ email: req.body.email });
    if (user) {
      return res.status(400).send({ error: "The email is already exist!" });
    }
  }
  const user = await User.query().patchAndFetchById(req.user.id, req.body);
  res.send(user);
};
module.exports.update = update;

const remove = async function(req, res) {
  res.setHeader("Content-Type", "application/json");
};
module.exports.remove = remove;

const login = async function(req, res) {
  res.setHeader("Content-Type", "application/json");
  if (!req.body.email) {
    return res.status(400).send({ error: "Please enter an email address!" });
  }
  if (!req.body.password) {
    return res.status(400).send({ error: "Please enter a password!" });
  }
  const user = await User.query()
    .first()
    .where({ email: req.body.email });
  if (!user) {
    return res.status(401).send({ error: "Wrong email or password!" });
  }

  const isPasswordValid = await user.verifyPassword(req.body.password);
  if (!isPasswordValid) {
    return res.status(401).send({ error: "Wrong email or password!" });
  }

  return res.send(user.getJWT());
};
module.exports.login = login;
