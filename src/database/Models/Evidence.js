'use strict';

const Model = require('./Model');

module.exports = class Evidence extends Model {

    static get tableName()
    {
        return 'evidence';
    }

};