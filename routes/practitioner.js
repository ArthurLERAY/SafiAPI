'use strict';
const router = require('express').Router();

router.get('/list', async (req, res) => {

    const practitioners = await Practitioner.getAll();
    res.send(practitioners);
});


module.exports = router;
