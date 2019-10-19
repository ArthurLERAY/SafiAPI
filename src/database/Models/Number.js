'use strict';

const Model = require('./Model');

module.exports = class Number extends Model {

    static get tableName()
    {
        return 'number';
    }

};