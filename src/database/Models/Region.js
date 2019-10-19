'use strict';

const Model = require('./Model');

module.exports = class Region extends Model {

    static get tableName()
    {
        return 'region';
    }

};