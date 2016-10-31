let argv = require('yargs').argv;

let {name, weapon} = JSON.parse(argv.config);

console.log(`My name is ${name} and I will kill you with my ${weapon}`);