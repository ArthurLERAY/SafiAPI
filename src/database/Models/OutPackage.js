'use strict';


const Model = require('./Model');

module.exports = class OutPackage extends Model {

    static get tableName() {
        return 'outPackage'
    }

};