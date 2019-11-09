'use strict';
// Modules imports
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const methodOverride = require('method-override');
const fs = require('fs');
const moment = require('moment');

// Import classes
const Employee = require('./src/Classes/Employee');
const Costs = require('./src/Classes/Costs');


// Import routes
const authRoute = require('./routes/auth');
const visitRoute = require('./routes/visit');
const drugRoute = require('./routes/drug');
const employeeRoute = require('./routes/employee');
const reportRoute = require('./routes/report');
const familyRoute = require('./routes/family');
const practitionerRoute = require('./routes/practitioner');
const activityRoute = require('./routes/activity');
const sheetRoute = require('./routes/sheet');
const regionRoute = require('./routes/region');
const evidenceRoute = require('./routes/evidence');


// Server configuration
const app = express();
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(bodyParser.json());
app.use(cors());
app.use(methodOverride());

// Route Middleware
app.use('/api/auth', authRoute);
app.use('/api/visits', visitRoute);
app.use('/api/drug', drugRoute);
app.use('/api/employee', employeeRoute);
app.use('/api/report', reportRoute);
app.use('/api/family', familyRoute);
app.use('/api/practitioner', practitionerRoute);
app.use('/api/activity', activityRoute);
app.use('/api/sheet', sheetRoute);
app.use('/api/region', regionRoute);
app.use('/api/evidence', evidenceRoute);

// Default error message
app.use(function(err, req, res, next) {
    addError(err.stack);
    res.status(500).send('Something broke!');
});


app.listen(3000, () => console.log('Server running'));

function addError(error) {

    const log = `${moment().format("MM-DD-YYYY LT")} : ${error} \n`;

    fs.appendFile('./logs', log, function(err) {
        if (err) {
            return console.error(err);
        }
    });
}
