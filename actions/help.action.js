const chalk = require('chalk');
const Table = require('cli-table3');

function logHelp() {
    const table = new Table({
        head: ['Command', 'Description'],
        colWidths: [20, 60]
    });

    const log = console.log;

    table.push(
        [chalk.yellow('--help'), chalk.blue('Show list of commands')],
        [chalk.yellow('--version'), chalk.blue('Show CLI version')],
        [chalk.yellow('new <project.egen path>'), chalk.blue('Generate new project based on project.egen file')],
    );

    log(table.toString());
}

module.exports = { logHelp };
