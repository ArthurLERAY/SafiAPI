'use strict';

const Model = require('./Model');

module.exports = class Drug extends Model {

    static get tableName()
    {
        return 'drug';
    }

};