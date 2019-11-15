'use strict';


const Model = require('./Model');

module.exports = class Family extends Model {

    static get tableName() {
        return 'family'
    }

};