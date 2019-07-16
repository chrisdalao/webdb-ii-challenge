exports.up = function (knex) {
    //make changes to the db schema
    return knex.schema.createTable('car-dealer', tbl => {
        //add a primary key named id, integer, auto-increment
        tbl.increments();
        //other columns
        tbl.string('make', 128).unique().notNullable();
        tbl.string('model', 128).unique().notNullable();
        tbl.decimal('price');
        tbl.string('type', 128);
        tbl.string('color');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('car-dealer');
};
