exports.up = knex => {
  return knex.schema
    .createTable("menuItems", table => {
      table.increments("id").primary();
      table.string("type");
      table.string("title");
      table.string("description");
      table.float("price", 4, 2);
      table.integer("weight");
      table.string("menuItemImage");
    })
    .createTable("profiles", table => {
      table.increments("id").primary();
      table.string("firstName");
      table.string("lastName");
      table.date("birthdate");
      table
        .string("profileImage")
        .defaultTo("https://www.freeiconspng.com/uploads/profile-icon-9.png");
    })
    .createTable("users", table => {
      table.increments("id").primary();
      table.string("email");
      table.text("password");
      table.date("passwordResetExpirationDate");
      table.text("passwordResetToken");
      table
      .integer("profileId")
      .unsigned()
      .references("id")
      .inTable("profiles");
    })
    .createTable("addresses", table => {
      table.increments("id").primary();
      table.string("city");
      table.string("district");
      table.enum("buildingType", ["house", "block"]);
      table.integer("number");
      table.string("entry");
      table.integer("floor");
      table.string("apartment");
      table
        .integer("profileId")
        .unsigned()
        .references("id")
        .inTable("profiles");
    })
    .createTable("favourites", table => {
      table.increments("id").primary();
      table
        .integer("menuItemId")
        .unsigned()
        .references("id")
        .inTable("menuItems")
        .onDelete("SET NULL");
      table
        .integer("profileId")
        .unsigned()
        .references("id")
        .inTable("profiles")
        .onDelete("SET NULL");
    });
  };

exports.down = knex => {
  return knex.schema
    .dropTableIfExists("favourites")
    .dropTableIfExists("addresses")
    .dropTableIfExists("profiles")
    .dropTableIfExists("users")
    .dropTableIfExists("menuItems");
};
