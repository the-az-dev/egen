'use strict'

const fs = require('fs');
const path = require('path');

class Package{
    constructor(name, description='Basic ExpressJS project using Egen', version='1.0.0', depen){
        this.name = name != null ? name : 'egen-project';
        this.description = description;
        this.depen = String(depen);
        this.version = version != null ? version : '1.0.0';
    }

    async generate(activePath){
        const packageJsonTemplate = {
            name: this.name,
            version: this.version,
            description: this.description,
            scripts: {
              start: "node server.js"
            },
            dependencies: {}
          };
          
          this.depen.split(', ').forEach(dep => {
            packageJsonTemplate.dependencies[dep.trim()] = "";
          });
        fs.writeFileSync(path.join(activePath, 'package.json'), JSON.stringify(packageJsonTemplate));
    }
}

module.exports = Package;