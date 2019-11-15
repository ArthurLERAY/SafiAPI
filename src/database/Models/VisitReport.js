'use strict';


const Model = require('./Model');

module.exports = class VisitReport extends Model {

    static get tableName() {
        return 'visitReport'
    }

};