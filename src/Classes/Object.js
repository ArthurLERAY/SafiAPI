'use strict';

const dbTables = require('../../src/database/Models/loader');

module.exports = class Object {

    constructor (modelName) {
        console.log('Test');
        this.modelName = modelName;
    }

    //Get queries

    static get() {
        const req = 'dbTables.' + this.modelName + '.query()';
        return eval(req);
    }
    whereId(id) {
        const req = `dbTables.` + this.modelName + `.query().findById(${id})`;
        return eval(req);
    }

    where(column, value) {
        const req = `dbTables.` + this.modelName + `.query().where('${column}', '${value}')`;
        return eval(req);
    }

    //Post queries


};