'use strict';

const Model = require('./Model');

module.exports = class Date extends Model {

    static get tableName()
    {
        return 'date';
    }

};