"use strict";

const { transaction } = require("objection");
const MenuItem = require("./models/MenuItem");

module.exports = router => {
  // -----------------------------//------------------------------------

  // Create a new MenuItem.
  router.post("/menuItems", async (req, res) => {
    const graph = req.body;
    const insertedGraph = await transaction(MenuItem.knex(), trx => {
      return MenuItem.query(trx).insert(req.body);
    });
    res.send(insertedGraph);
  });

  // Get All MenuItems Filtered by Type.
  
  router.get("/menuItems", async (req, res) => {
    const menuItems = await MenuItem.query()
      .skipUndefined()
      //Example: http://localhost:4000/menuItems?type=salad
      .where("type", "like", req.query.type)
     //http://localhost:4000/menuItems?orderCriteria=weight&type=salad&desc=true
      .orderBy(req.query.orderCriteria, req.query.desc ? 'DESC' : 'ASC');
    res.send(menuItems);
  });

  // Get a MenuItem by ID
  router.get("/menuItems/:id", async (req, res) => {
    const menuItems = await MenuItem.query().findById(req.params.id);
    if (!menuItems) {
      throw createStatusCodeError(404);
    }
    res.send(menuItems);
  });

  // Patch a single MenuItem.
  router.patch("/menuItems/:id", async (req, res) => {
    const menuItem = await MenuItem.query().patchAndFetchById(
      req.params.id,
      req.body
    );
    res.send(menuItem);
  });

  // -------------------------------//-------------------------------------------

  // Patch a person and upsert its relations.
  router.patch("/persons/:id/upsert", async (req, res) => {
    const graph = req.body;

    // Make sure only one person was sent.
    if (Array.isArray(graph)) {
      throw createStatusCodeError(400);
    }

    // Make sure the person has the correct id because `upsertGraph` uses the id fields
    // to determine which models need to be updated and which inserted.
    graph.id = parseInt(req.params.id, 10);

    // It's a good idea to wrap `upsertGraph` call in a transaction since it
    // may create multiple queries.
    const upsertedGraph = await transaction(Person.knex(), trx => {
      return (
        Person.query(trx)
          // For security reasons, limit the relations that can be upserted.
          .allowUpsert("[pets, children.[pets, movies], movies, parent]")
          .upsertGraph(graph)
      );
    });

    res.send(upsertedGraph);
  });

  // Get multiple Persons. The result can be filtered using query parameters
  // `minAge`, `maxAge` and `firstName`. Relations can be fetched eagerly
  // by giving a relation expression as the `eager` query parameter.
  router.get("/persons", async (req, res) => {
    // We don't need to check for the existence of the query parameters because
    // we call the `skipUndefined` method. It causes the query builder methods
    // to do nothing if one of the values is undefined.
    const persons = await Person.query()
      .skipUndefined()
      // For security reasons, limit the relations that can be fetched.
      .allowEager(
        "[pets, parent, children.[pets, movies.actors], movies.actors.pets]"
      )
      .eager(req.query.eager)
      .where("age", ">=", req.query.minAge)
      .where("age", "<", req.query.maxAge)
      .where("firstName", "like", req.query.firstName)
      .orderBy("firstName")
      // Order eagerly loaded pets by name.
      .modifyEager("[pets, children.pets]", qb => qb.orderBy("name"));

    res.send(persons);
  });

  // Delete a person.
  router.delete("/persons/:id", async (req, res) => {
    await Person.query().deleteById(req.params.id);

    res.send({});
  });

  // Add a child for a Person.
  router.post("/persons/:id/children", async (req, res) => {
    const person = await Person.query().findById(req.params.id);

    if (!person) {
      throw createStatusCodeError(404);
    }

    const child = await person.$relatedQuery("children").insert(req.body);

    res.send(child);
  });

  // Add a pet for a Person.
  router.post("/persons/:id/pets", async (req, res) => {
    const person = await Person.query().findById(req.params.id);

    if (!person) {
      throw createStatusCodeError(404);
    }

    const pet = await person.$relatedQuery("pets").insert(req.body);

    res.send(pet);
  });

  // Get a Person's pets. The result can be filtered using query parameters
  // `name` and `species`.
  router.get("/persons/:id/pets", async (req, res) => {
    const person = await Person.query().findById(req.params.id);

    if (!person) {
      throw createStatusCodeError(404);
    }

    // We don't need to check for the existence of the query parameters because
    // we call the `skipUndefined` method. It causes the query builder methods
    // to do nothing if one of the values is undefined.
    const pets = await person
      .$relatedQuery("pets")
      .skipUndefined()
      .where("name", "like", req.query.name)
      .where("species", req.query.species);

    res.send(pets);
  });

  // Add a movie for a Person.
  router.post("/persons/:id/movies", async (req, res) => {
    // Inserting a movie for a person creates two queries: the movie insert query
    // and the join table row insert query. It is wise to use a transaction here.
    const movie = await transaction(Person.knex(), async trx => {
      const person = await Person.query(trx).findById(req.params.id);

      if (!person) {
        throw createStatusCodeError(404);
      }

      return await person.$relatedQuery("movies", trx).insert(req.body);
    });

    res.send(movie);
  });

  // Add existing Person as an actor to a movie.
  router.post("/movies/:id/actors", async (req, res) => {
    const movie = await Movie.query().findById(req.params.id);

    if (!movie) {
      throw createStatusCodeError(404);
    }

    await movie.$relatedQuery("actors").relate(req.body.id);

    res.send(req.body);
  });

  // Get Movie's actors.
  router.get("/movies/:id/actors", async (req, res) => {
    const movie = await Movie.query().findById(req.params.id);

    if (!movie) {
      throw createStatusCodeError(404);
    }

    const actors = await movie.$relatedQuery("actors");
    res.send(actors);
  });
};

// The error returned by this function is handled in the error handler middleware in app.js.
function createStatusCodeError(statusCode) {
  return Object.assign(new Error(), {
    statusCode
  });
}
