const chalk = require('chalk');
const { VERSION } = require('../constants/config');

function logVersion() {
    const log = console.log;
    log(`Current version: ${chalk.green(`${VERSION}`)}`);
}

module.exports = { logVersion };
