'use strict';


const Model = require('./Model');

module.exports = class Medicine extends Model {

    static get tableName() {
        return 'medicine'
    }

};