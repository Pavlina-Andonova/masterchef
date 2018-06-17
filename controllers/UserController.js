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

  const newUser = await transaction(User.knex(), trx => {
    return User.query(trx)
      .allowInsert("profile")
      .insertGraph(graph);
  });

  return res.send(newUser.getJWT());
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

//* Get user email*//
const getUserEmail = async function(req, res) {
  res.setHeader("Content-Type", "application/json");
  const user = await User.query()
    .first()
    .where({
      profileId: req.user.id
    });
  if (!user) {
    return res.status(404).send({ error: "Not Found!" });
  }

  return res.send({ email: user.email });
};
module.exports.getUserEmail = getUserEmail;

//* Update user email *//
const updateUserEmail = async function(req, res) {
  res.setHeader("Content-Type", "application/json");
  const user = await User.query()
    .first()
    .where({ email: req.body.email });
  if (user && user.profileId !== req.user.id) {
    return res.status(409).send({ error: "E-mail is already in use!" });
  }

  const userData = await User.query()
    .first()
    .patch({
      email: req.body.email
    })
    .where({
      profileId: req.user.id
    });

  if (userData <= 0) {
    return res.status(404).send({ error: "User not found!" });
  }

  return res.send({ email: req.body.email });
};
module.exports.updateUserEmail = updateUserEmail;

//* Update user password *//
const updateUserPassword = async function(req, res) {
  res.setHeader("Content-Type", "application/json");
  if (!req.body.oldPassword || !req.body.newPassword) {
    return res
      .status(400)
      .send({ error: "Old and new password are required!" });
  }

  let user = await User.query()
    .first()
    .where({ profileId: req.user.id });
  if (!user) {
    return res.status(401).send({ error: "User not found!" });
  }

  const isPasswordValid = await user.verifyPassword(req.body.oldPassword);
  if (!isPasswordValid) {
    return res.status(401).send({ oldPassword: "Wrong password!" });
  }

  user = await User.query().patchAndFetchById(user.id, {
    password: req.body.newPassword
  });

  if (!user) {
    return res.status(500).send({ error: "Something went wrong!" });
  }

  return res
    .status(200)
    .send({ newPassword: "Password changed successfully!" });
};
module.exports.updateUserPassword = updateUserPassword;
