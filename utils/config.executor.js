"use strict";

const fs = require("fs");

class ConfigExecutor {
  constructor(configPath) {
    this.configPath = configPath;
  }
  execute() {
    const configContent = fs.readFileSync(this.configPath, "utf8");
    const configLines = configContent.split("\n");
    configLines.pop();
    const config = {};
    configLines.forEach((line) => {
      const keyValue = line.split("=");
      if (keyValue.length === 2) {
        const [key, value] = keyValue;
        config[key.trim()] = value.trim();
      } else {
        console.error(`ERROR: Bad format for line - ${line}`);
      }
    });
    return this.#analyzeConfig(config);
  }

  #analyzeConfig(config) {
    config.dependencies =
      config.dependencies != undefined
        ? config.dependencies +
          `, express, dotenv${
            config.database_type == "mongodb"
              ? ", mongoose"
              : config.database_type == "mysql"
              ? ", mysql2"
              : ""
          }`
        : "express, dotenv";
    config.description =
      config.description != undefined
        ? config.description
        : "Basic ExpressJS project using Egen";
    config.version = config.version != undefined ? config.version : "1.0.0";
    return config;
  }
}

module.exports = ConfigExecutor;
