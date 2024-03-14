const chalk = require('chalk');
const Table = require('cli-table3');

function logHelp() {
    const table = new Table({
        head: ['Command', 'Description', 'Status'],
        colWidths: [50, 60, 20]
    });

    const log = console.log;

    table.push(
        [chalk.yellow('--help'), chalk.blue('Show list of commands'), chalk.green('Able')],
        [chalk.yellow('--version'), chalk.blue('Show CLI version'), chalk.green('Able')],
        [chalk.yellow('new project <project.egen path>'), chalk.blue('Generate new project based on project.egen file'), chalk.yellow('Able (alpha)')],
        [chalk.yellow('new <component_name> <name>'), chalk.blue('Generate new component on your project (ex. controller)'), chalk.red('Disable')],
    );

    log(table.toString());
}

module.exports = { logHelp };
