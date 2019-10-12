exports.up = function (knex) {
    return knex.schema.createTable('web_user', table => {
        table.increments('id');
        table.string('firstname');
        table.string('lastname');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('web_user');
};