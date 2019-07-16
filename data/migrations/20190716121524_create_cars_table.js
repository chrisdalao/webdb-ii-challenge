exports.up = function (knex) {
    //make changes to the db schema
    return knex.schema.createTable('cars', tbl => {
        //add a primary key named id, integer, auto-increment
        tbl.increments();
        //other columns
        tbl.string('VIN', 128).unique().notNullable();
        tbl.string('make', 128).notNullable();
        tbl.string('model', 128).notNullable();
        tbl.decimal('mileage').notNullable();
        tbl.string('transmission', 128);
        tbl.string('status', 128);
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('cars');
};
