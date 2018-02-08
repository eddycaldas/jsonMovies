
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movie', function(table) {
    table.increments()
    table.text('title')
    table.text('genres')
  })
};

exports.down = function(knex, Promise) {
  
};
