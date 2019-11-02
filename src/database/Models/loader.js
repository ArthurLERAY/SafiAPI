const fs = require('fs');
const path = require('path');

fs.readdirSync(__dirname).forEach(file => {
    const filename = file.split('.');
    filename.pop();
    module.exports[path.basename(file, '.js')] = require(path.join(__dirname, file));
});