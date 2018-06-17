exports.up = knex => {
  return knex.schema.createTable("chefs", table => {
    table.increments("id").primary();
    table.string("name");
    table.string("jobPosition");
    table.text("description");
    table.string("image");
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists("chefs");
};
