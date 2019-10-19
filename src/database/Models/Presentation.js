'use strict';

const Model = require('./Model');

module.exports = class Presentation extends Model {

    static get tableName()
    {
        return 'presentation';
    }

};