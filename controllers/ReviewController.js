const Review = require("../models/Review");

//**Create Review */
const createReview = async function(req, res) {
  // res.setHeader("Content-Type", "application/json");
  const review = await Review.query().insert({
    ...req.body,
    profileId: req.user.id
  });
  if (!review) {
    return res.status(500).send({ error: "Somethig went wrong!" });
  }

  return res.send(review);
};
module.exports.createReview = createReview;

//**Get Reviews */
const getReviews = async function(req, res) {
  res.setHeader("Content-Type", "application/json");
  const reviews = await Review.query();
  if (!reviews) {
    return res.status(404).send({ error: "Not Found!" });
  }

  return res.send(reviews);
};
module.exports.getReviews = getReviews;

//**Get Review */
const getReview = async function(req, res) {
  res.setHeader("Content-Type", "application/json");
  const review = await Review.query().findById(req.params.id);
  if (!review) {
    return res.status(404).send({ error: "Not Found!" });
  }

  return res.send(review);
};
module.exports.getReview = getReview;

//**Update Review */
const updateReview = async function(req, res) {
  res.setHeader("Content-Type", "application/json");
  const review = await Review.query().patchAndFetchById(
    req.params.id,
    req.body
  );
  if (!review) {
    return res.status(404).send({ error: "Not Found!" });
  }

  return res.send(review);
};

module.exports.updateReview = updateReview;

//**Delete Review */
const deleteReview = async function(req, res) {
  res.setHeader("Content-Type", "application/json");
  const numberOfDeletedReviews = await Review.query()
    .findById(req.params.id)
    .del();
  if (numberOfDeletedReviews <= 0) {
    return res.status(404).send({ error: "Not Found!" });
  }
  return res.status(201).send();
};
module.exports.deleteReview = deleteReview;
