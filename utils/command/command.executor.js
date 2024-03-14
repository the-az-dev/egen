const { CommandItem, commands } = require("./command.list");
const chalk = require('chalk');

class Command {
  constructor(args) {
    this.args = args;
  }

  execute() {
    if (this.args.length === 0) {
      const command = commands.find(
        (commandItem) => commandItem.arg === "--help"
      );
      if (command) {
        command.run();
      }
      return;
    }
    const foundCommand = commands.find((command) => command.arg === this.args[0]);
    if (foundCommand) {
      foundCommand.params = this.args.length >= 1 ? this.args.slice(1) : [];
      foundCommand.run();
      return;
    } else {
      console.log(chalk.red('ERROR: No command found! Use `--help` to show list of commands'));
      return;
    }
  }
}

module.exports = { Command };
