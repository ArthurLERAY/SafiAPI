'use strict';

const Model = require('./Model');

module.exports = class User extends Model {

    static get tableName()
    {
        return 'user';
    }

};