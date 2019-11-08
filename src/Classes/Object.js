'use strict';

const dbTables = require('../../src/database/Models/loader');

module.exports = class Object {

    // Get queries

    static async getAll() {
        return dbTables[this.modelName].query();
    }

    static async getWhereId(id) {
        return dbTables[this.modelName].query().findById(id);
    }

    static async getWhere(column, value) {
        return dbTables[this.modelName].query().where(column, value);
    }

    // Post/Put/Delete queries

    static async patch(data, where) {
        try {
            await dbTables[this.modelName].query().patch({data}).where(where["column"], where["value"]);
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    static async create(data) {
        try {
            await dbTables[this.modelName].query().insert(data);
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    static async delete(where) {
        try {
            await dbTables[this.modelName].query().delete().where(where["column"], where["value"]);
        }catch (err) {
            console.error(err);
        }
    }

};
