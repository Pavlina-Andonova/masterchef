exports.up = knex => {
  return knex.schema.createTable("reviews", table => {
    table.increments("id").primary();
    table.text("reviewText");
    table.datetime("date");
    table.integer("rating");
    table
      .integer("profileId")
      .unsigned()
      .references("id")
      .inTable("profiles")
      .onDelete("CASCADE");
    table
      .integer("menuItemId")
      .unsigned()
      .references("id")
      .inTable("menuItems")
      .onDelete("CASCADE");
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists("reviews");
};
