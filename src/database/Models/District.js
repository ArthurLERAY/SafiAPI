'use strict';


const Model = require('./Model');

module.exports = class District extends Model {

    static get tableName() {
        return 'district'
    }

};