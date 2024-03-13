const Actions = require('../actions/index');

class CommandItem {
    /**
     * Constructor of CommandItem class
     * @constructor
     * @param {String} arg
     * @param {Function} action
     */
    constructor(arg, action) {
        this.arg = arg;
        this.action = action;
    }

    /**
     * Execute command from CommandItem action param
     */
    run() {
        this.action();
    }
}

const commands = [
    new CommandItem('--help', Actions.logHelp),
    new CommandItem('--version', Actions.logVersion),
];

module.exports = { CommandItem, commands };
