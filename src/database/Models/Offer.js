'use strict';


const Model = require('./Model');

module.exports = class Offer extends Model {

    static get tableName() {
        return 'offer'
    }

};