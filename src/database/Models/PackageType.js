'use strict';


const Model = require('./Model');

module.exports = class PackageType extends Model {

    static get tableName() {
        return 'packageType'
    }

};