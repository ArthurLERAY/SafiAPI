'use strict';

const Model = require('./Model');

module.exports = class Employee extends Model {

    static get tableName()
    {
        return 'employee';
    }

};