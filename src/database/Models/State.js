'use strict';

const Model = require('./Model');

module.exports = class State extends Model {

    static get tableName()
    {
        return 'state';
    }

};