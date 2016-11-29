'use strict';


exports.up = function(knex, Promise) {
  return knex.schema.createTable('artists', function(table) {
    // id
    table.increments();
    // concert_id
    table.integer('concert_id').notNullable().references('concerts.id').onDelete('CASCADE');
    // name
    table.string('name');
    // price
    table.integer('age');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('artists');
};
