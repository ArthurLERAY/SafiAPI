'use strict';

const Model = require('./Model');

module.exports = class Donate extends Model {

    static get tableName()
    {
        return 'donate';
    }

};