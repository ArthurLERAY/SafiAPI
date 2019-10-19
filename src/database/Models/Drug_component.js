'use strict';

const Model = require('./Model');

module.exports = class Drug_component extends Model {

    static get tableName()
    {
        return 'drug_component';
    }

};