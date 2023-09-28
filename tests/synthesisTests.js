const synthesis = require('../util/synthesis');
const monsters = require('../objects/monsters.json');
// Variables
let parent1 = "drake_slime";
let parent2 = "onion_slime";
let target = null;
let trait1 = null;
let trait2 = null;
let trait3 = null;
let parents = [];
if (parent1) parents.push(parent1);
if (parent2) parents.push(parent2);
let traits = [];
if (trait1) traits.push(trait1);
if (trait2) traits.push(trait2);
if (trait3) traits.push(trait3);

console.log(`parent1: ${parent1} + parent2: ${parent2}:`);
let bothParentsResult = synthesis({ parents: parents, target: target, traits: traits });
console.log(bothParentsResult);