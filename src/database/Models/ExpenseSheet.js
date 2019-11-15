'use strict';


const Model = require('./Model');

module.exports = class ExpenseSheet extends Model {

    static get tableName() {
        return 'expenseSheet'
    }

};