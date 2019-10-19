'use strict';

const UserDB = require('../../src/database/Models/User');

module.exports = class UserClass {



    constructor() {
    }

    //Get queries
    whereId(id) {
        return UserDB.query().findById(id);
    }

    where(column, value) {
        return UserDB.query().where(column, value);
    }

    or({whereColumn, whereValue}, {whereColumn, whereValue}) {
        return UserDB.query().where(whereColumn, whereValue).orWhere;
    }

    //Post queries

};