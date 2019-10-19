'use strict';

const Model = require('./Model');

module.exports = class Person_type extends Model {

    static get tableName()
    {
        return 'person_type';
    }

};