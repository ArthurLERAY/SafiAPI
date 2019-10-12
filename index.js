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

const User = require('./src/database/Models/User');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true,
}));

app.use(bodyParser.json());
app.use(cors());

app.get('/users', async (req, res) => {
    res.send(await User.query());
});


app.listen(3000, () => console.log('Server running'));