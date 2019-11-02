'use strict';
// Modules imports
require('dotenv').config();
const express = require('express');
const moment = require('moment');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

const UserClass = require('./src/Classes/UserClass');

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

//TODO handle static methods

// let User = new UserClass('Arthur', 'LE RAY');
// (async () => {
//     console.log(await UserClass.get());
// })();


app.listen(3000, () => console.log('Server running'));