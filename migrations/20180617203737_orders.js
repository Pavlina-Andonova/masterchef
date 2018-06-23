exports.up = knex => {
  return knex.schema
    .createTable("orders", table => {
      table.increments("id").primary();
      table.string("paymentMethod");
      table.integer("totalPrice");
      table.datetime("orderDate");
      table
        .integer("addressId")
        .unsigned()
        .references("id")
        .inTable("addresses")
        .onDelete("SET NULL");
      table
        .integer("profileId")
        .unsigned()
        .references("id")
        .inTable("profiles")
        .onDelete("CASCADE");
    })
    .createTable("orders_menuItems", table => {
      table.integer("itemCount");
      table
        .integer("orderId")
        .unsigned()
        .references("id")
        .inTable("orders")
        .onDelete("CASCADE");
      table
        .integer("menuItemId")
        .unsigned()
        .references("id")
        .inTable("menuItems")
        .onDelete("SET NULL");
    });
};

exports.down = knex => {
  return knex.schema
    .dropTableIfExists("orders")
    .dropTableIfExists("orders_menuItems");
};
