const synthesis = require('./synthesis');
const monsters = require('../objects/monsters.json');
let parent1 = "drake_slime";
let parent2 = "skeleton";
let target = null;
let synthesisResults = synthesis(parent1, parent2, target);
console.log(synthesisResults);