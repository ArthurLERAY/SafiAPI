'use strict';


const Model = require('./Model');

module.exports = class Invite extends Model {

    static get tableName() {
        return 'invite'
    }

};