'use strict';

const Model = require('./Model');

module.exports = class Charge_type extends Model {

    static get tableName()
    {
        return 'charge_type';
    }

};