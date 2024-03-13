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
      foundCommand.run();
    } else {
      throw new Error(chalk.red('No command found! Use `--help` to show list of commands'));
    }
  }
}

module.exports = { Command };
