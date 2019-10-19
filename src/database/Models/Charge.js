'use strict';

const Model = require('./Model');

module.exports = class Charge extends Model {

    static get tableName()
    {
        return 'charge';
    }

};