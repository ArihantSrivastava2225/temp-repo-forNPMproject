const _ = require('lodash')

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items)
console.log(newItems)  //[ 1, 2, 3, 4 ]

//we add a file .gitignore and write : /node_modules in it as we can't push this file to github due to its large size . So if a person cones our repo, he would first need to write : npm i in terminal to install all required modules in his system to run required codebase.

//npm i nodemon -D : this installs nodemon as a devdependency , and not as dependency

console.log("hello world")