'use strict';

const Model = require('./Model');

module.exports = class Work extends Model {

    static get tableName()
    {
        return 'work';
    }

};