#!/usr/bin/env node
const { Command } = require("../utils/command/command.executor");

const bootstrap = async () => {
  new Command(process.argv.slice(2)).execute();
};
bootstrap();
