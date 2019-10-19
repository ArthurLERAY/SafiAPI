'use strict';

const Model = require('./Model');

module.exports = class Diploma extends Model {

    static get tableName()
    {
        return 'diploma';
    }

};