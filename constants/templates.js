const RUNNER_FILE = `
const express = require("express");
require("dotenv").config();

const server = express();

server.use(require("body-parser").json());

server.listen(process.env.PORT, () => {
    console.log('Server is starting on http://localhost:' + process.env.PORT);
  });
`;
const ENV_CONFIG = {};
const PACKAGE_FILE = {}; 

module.exports = {
    RUNNER_FILE
};