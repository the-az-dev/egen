# EGEN CLI

## What is this?
Egen CLI (or Express Generator) - Command Line Application for generating and organizing project based on NodeJS + ExpressJS library. It`s a suitable tool which can help you to generate basic structure of ExpressJS project as fast as it can. Egen is designed to make it easy to create and work on a project, as well as to simplify the creation of new components for your future API. Egen includes basic amount of Databases (ex. MongoDB, MySQL) and basic types of Auth system (JWT Auth basic). 

### For version 0.1.3 we have:

<input type="checkbox" checked> ✅ List of commands (--help)

<input type="checkbox" checked> ✅ Version of CLI (--version)

<input type="checkbox" checked> ✅ Creating project based on `project.egen` config file

<input type="checkbox" checked> ✅ Adding new packages to `package.json` based on `project.egen` config file

<input type="checkbox"> Generating new components (ex. controllers)

<input type="checkbox"> TypeScript supporting

<input type="checkbox"> Setuping for public CLI usage

<input type="checkbox"> Optimizing for fast generation 


## How to use EGEN CLI
Install egen package in your PC using this command:
```bash
npm install -g egen
```

### Note for Windows users
For using without npx command use this command after installation:
```bash
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```
After instalation on your terminal just type:
```bash
eg <command> <param>
```
For more information of commands you can type:
```bash
eg --help
```
