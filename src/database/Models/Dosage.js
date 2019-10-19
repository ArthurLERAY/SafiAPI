'use strict';

const Model = require('./Model');

module.exports = class Dosage extends Model {

    static get tableName()
    {
        return 'dosage';
    }

};