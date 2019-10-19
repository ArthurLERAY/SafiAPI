'use strict';

const Model = require('./Model');

module.exports = class Department extends Model {

    static get tableName()
    {
        return 'department';
    }

};