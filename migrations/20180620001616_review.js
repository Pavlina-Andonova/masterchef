exports.up = knex => {
    return knex.schema.createTable("reviews", table => {
      table.increments("id").primary();
      table.integer("profileId");
      table.integer("menuItemId");
      table.text("reviewText");
      table.datetime("date");
    });
  };
  
  exports.down = knex => {
    return knex.schema.dropTableIfExists("reviews");
  };
  