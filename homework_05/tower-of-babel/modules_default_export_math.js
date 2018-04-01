import Module from './modules_default_export';

let arg1 = process.argv[2];
let arg2 = process.argv[3];

console.log(Module.PI);
console.log(Module.sqrt(+arg1));
console.log(Module.square(+arg2));