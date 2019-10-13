'use strict';
const router = require('express').Router();


router.get('/register', (req, res) => {
    res.send('Register,');
});


module.exports = router;