'use strict';

const Model = require('./Model');

module.exports = class Speciality extends Model {

    static get tableName()
    {
        return 'speciality';
    }

};