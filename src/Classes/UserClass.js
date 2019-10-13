'use strict';
export default class UserClass {

    constructor() {
        this.firstname = 'Arthur';
        this.lastname = 'LE RAY';
    }

    greet() {
        return `${this.firstname} says hello`;
    }
}