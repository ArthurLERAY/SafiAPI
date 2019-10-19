'use strict';

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


// Server configuration
const app = express();
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(bodyParser.json());
app.use(cors());

// Route Middleware
app.use('/api/user', authRoute);


let User = new UserClass('Arthur', 'LE RAY');
console.log(User.greet());


//app.listen(3000, () => console.log('Server running'));