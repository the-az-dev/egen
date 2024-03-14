'use strict';

const fs = require('fs');
const path = require('path');
const templates = require('../constants/templates');

class MainFileModule{
    async generate(activePath) {
        fs.writeFileSync(path.join(activePath, 'server.js'), templates.RUNNER_FILE);
    }
}

module.exports = MainFileModule;