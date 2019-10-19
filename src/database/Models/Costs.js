'use strict';

const Model = require('./Model');

module.exports = class Costs extends Model {

    static get tableName()
    {
        return 'costs';
    }

};