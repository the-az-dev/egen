const Actions = require('../../actions/index');

class CommandItem {
    /**
     * Constructor of CommandItem class
     * @constructor
     * @param {String} arg
     * @param {Function} action
     * @param {Array} params
     */
    constructor(arg, action, params) {
        this.arg = arg;
        this.action = action;
        this.params = params;
    }

    /**
     * Execute command from CommandItem action param
     */
    run() {
        this.action(this.params);
    }
}

const commands = [
    new CommandItem('--help', Actions.logHelp, []),
    new CommandItem('--version', Actions.logVersion, []),
    new CommandItem('new', Actions.generate, []),
];

module.exports = { CommandItem, commands };
