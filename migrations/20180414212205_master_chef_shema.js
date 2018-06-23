exports.up = knex => {
  return knex.schema
    .createTable("menuCategories", table => {
      table.increments("id").primary();
      table.string("categoryType");
      table.string("name");
      table.string("image");
      table.text("description").defaultTo("");
    })
    .createTable("menuItems", table => {
      table.increments("id").primary();
      table.string("title");
      table.string("description");
      table.float("price", 4, 2);
      table.integer("weight");
      table.string("menuItemImage");
      table
        .integer("categoryId")
        .unsigned()
        .references("id")
        .inTable("menuCategories")
        .onDelete("SET NULL");
    })
    .createTable("profiles", table => {
      table.increments("id").primary();
      table.string("firstName");
      table.string("lastName").defaultTo("");
      table.bool("isAdmin").defaultTo(false);            
      table.date("birthdate").defaultTo(null);
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
        .inTable("profiles")
        .onDelete("CASCADE");
    })
    .createTable("addresses", table => {
      table.increments("id").primary();
      table.string("city");
      table.string("street");
      table.string("buildingType");
      table.integer("number");
      table.string("entry");
      table.integer("floor");
      table.bool("isRestaurant").defaultTo(false);
      table.string("apartment");
      table
        .integer("profileId")
        .unsigned()
        .references("id")
        .inTable("profiles")
        .onDelete("CASCADE");
    });
};

exports.down = knex => {
  return knex.schema
    .dropTableIfExists("addresses")
    .dropTableIfExists("profiles")
    .dropTableIfExists("users")
    .dropTableIfExists("menuItems")
    .dropTableIfExists("menuCategories");
};
