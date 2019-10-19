'use strict';

const Model = require('./Model');

module.exports = class Practitioner extends Model {

    static get tableName()
    {
        return 'practitioner';
    }

};