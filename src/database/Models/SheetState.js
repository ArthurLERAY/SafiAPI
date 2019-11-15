'use strict';


const Model = require('./Model');

module.exports = class SheetState extends Model {

    static get tableName() {
        return 'sheetState'
    }

};