const chalk = require("chalk");
const fs = require("fs");
const path = require("path");
const config = require("../constants/config");
const ConfigExecutor = require("../utils/config.executor");
const PackageModule = require("../modules/PackageModule");
const DotEnvModule = require("../modules/DotEnvModule");
const MainFileModule = require("../modules/MainFileModule");

function generate(params) {
  const subcommand = params[0];
  const argument = params[1];
  if (subcommand === "project") {
    if (argument === ".") {
      const activePath = process.cwd();
      const egen_path = path.join(activePath, config.EGEN_FILENAME);
      if (!fs.existsSync(egen_path)) {
        console.log(
          chalk.red(
            `ERROR: No ${config.EGEN_FILENAME} file in this directory. Please write correct path or create ${config.EGEN_FILENAME} file in searched directory!`
          )
        );
        console.log(chalk.grey(`DEBUG: Path - ${egen_path}`));
        return;
      }
      /**
       * Ananlyze config file and run config execution
       */
      generateProject(new ConfigExecutor(egen_path).execute(), activePath);
    } else {
      const egen_path = path.join(argument, config.EGEN_FILENAME);
      if (!fs.existsSync(egen_path)) {
        console.log(
          chalk.red(
            `ERROR: No ${config.EGEN_FILENAME} file in this directory. Please write correct path or create ${config.EGEN_FILENAME} file in searched directory!`
          )
        );
        console.log(chalk.grey(`DEBUG: Path - ${egen_path}`));
        return;
      }
      /**
       * Ananlyze config file and run config execution
       */
      generateProject(new ConfigExecutor(egen_path).execute(), argument);
    }
  }else{
    console.log(chalk.yellow('WARNING: This function is disable for open realese version'));
  }
}

async function generateProject(config, activePath) {
  await new PackageModule(
    config.name,
    config.description,
    config.version,
    config.dependencies
  ).generate(activePath);
  console.log(chalk.green('CREATE: package.json file'));
  await new DotEnvModule({
    port: config.port,
    database_type: config.database_type,
    database_username: config.database_username,
    database_password: config.database_password,
    database_url: config.database_url,
  }).generate(activePath);
  console.log(chalk.green('CREATE: .env file'));
  await new MainFileModule().generate(activePath);
  console.log(chalk.green('CREATE: server.js file'));
}

module.exports = {
  generate,
};
