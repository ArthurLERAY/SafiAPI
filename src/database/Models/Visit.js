'use strict';


const Model = require('./Model');

module.exports = class Visit extends Model {

    static get tableName() {
        return 'visit'
    }

};