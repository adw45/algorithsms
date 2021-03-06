const search = require('./binary-tree-search'),
    add = require('./binary-tree-add'),
    remove = require('./binary-tree-remove');

let recursiveNode = {value: 10};
let iterativeNode = {value: 10};


console.log('rec', add.recursive(recursiveNode, 5));
console.log('it',  add.iterative(iterativeNode, 5));
console.log('rec', add.recursive(recursiveNode, 7));
console.log('it', add.iterative(iterativeNode, 7));

console.log(search.recursive(recursiveNode, 5));
console.log(search.iterative(iterativeNode, 5));
console.log(search.recursive(recursiveNode, 11));
console.log(search.iterative(iterativeNode, 11));
console.log(search.recursive(recursiveNode, 7));
console.log(search.iterative(iterativeNode, 7));