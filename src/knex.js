'use strict';

require('dotenv').config();
const Knex = require('knex');

module.exports = Knex({
    client: 'mysql',
    connection: {
        host : process.env.DB_HOST,
        user : process.env.DB_USER,
        password : process.env.DB_PWD,
        database : process.env.DB_NAME
    }
});