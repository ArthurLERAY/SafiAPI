'use strict';

const Model = require('./Model');

module.exports = class Guest extends Model {

    static get tableName()
    {
        return 'guest';
    }

};