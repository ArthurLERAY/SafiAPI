'use strict';

const Model = require('./Model');

module.exports = class Monetary extends Model {

    static get tableName()
    {
        return 'monetary';
    }

};