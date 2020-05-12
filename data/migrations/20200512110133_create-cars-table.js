exports.up = function (knex) {
    return knex.schema.createTable('cars', tbl => {
        // * ID
        tbl.increments();

        // * Requireds
        tbl.text('vin', 128).notNullable().unique();
        tbl.text('make', 128).notNullable();
        tbl.text('model', 128).notNullable();
        tbl.integer('mileage').notNullable();

        // * Optionals
        tbl.text('title_status', 128);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};