'use strict';

const Model = require('./Model');

module.exports = class ExtraChargeCosts extends Model {

    static get tableName()
    {
        return 'extraChargeCosts';
    }

};