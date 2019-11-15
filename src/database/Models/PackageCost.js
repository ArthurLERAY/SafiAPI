'use strict';


const Model = require('./Model');

module.exports = class PackageCost extends Model {

    static get tableName() {
        return 'packageCost'
    }

};