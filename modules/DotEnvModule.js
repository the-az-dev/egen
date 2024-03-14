'use strict';

const fs = require('fs');
const path = require('path');

class DotEnvModule{
    constructor(...params) {
        this.params = params;
    }

    async generate(activePath) {
        const paramsContent = Object.entries(this.params[0])
            .map(([key, value]) => `${key.toUpperCase()}=${value}`)
            .join('\n');
        fs.writeFileSync(path.join(activePath, '.env'), paramsContent);
    }
}

module.exports = DotEnvModule;