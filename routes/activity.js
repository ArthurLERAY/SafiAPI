'use strict';
const router = require('express').Router();
const tables = require('../src/database/Models/loader');

// TODO see for a row that allows to see if CA is allowed or waiting
router.post('/ask', (req, res) => {

    // tables.complementary_activity.query().insert({
    //
    // })

});

module.exports = router;