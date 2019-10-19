'use strict';

const Model = require('./Model');

module.exports = class Component extends Model {

    static get tableName()
    {
        return 'component';
    }

};