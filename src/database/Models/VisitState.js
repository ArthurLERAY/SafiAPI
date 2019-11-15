'use strict';


const Model = require('./Model');

module.exports = class VisitState extends Model {

    static get tableName() {
        return 'visitState'
    }

};