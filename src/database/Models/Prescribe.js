'use strict';

const Model = require('./Model');

module.exports = class Prescribe extends Model {

    static get tableName()
    {
        return 'prescribe';
    }

};