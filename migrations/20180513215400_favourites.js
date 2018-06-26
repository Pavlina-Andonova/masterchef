exports.up = knex => {
    return knex.schema
      .createTable('profiles_menuItems', table => {
        table
          .integer('profileId')
          .unsigned()
          .references('id')
          .inTable('profiles')
          .onDelete('CASCADE');
        table
          .integer('menuItemId')
          .unsigned()
          .references('id')
          .inTable('menuItems')
          .onDelete('CASCADE');
      });
  };
  
  exports.down = knex => {
    return knex.schema
      .dropTableIfExists('profiles_menuItems');
  };