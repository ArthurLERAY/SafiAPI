'use strict';


const Model = require('./Model');

module.exports = class Service extends Model {

    static get tableName() {
        return 'service'
    }

};