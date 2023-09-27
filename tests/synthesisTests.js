const synthesis = require('../util/synthesis');
const monsters = require('../objects/monsters.json');
let parent1 = "drake_slime";
let parent2 = "onion_slime";
let target = null;
console.log(`parent1: ${parent1} + parent2: ${parent2}:`);
let bothParentsResult = synthesis(parent1, parent2);
console.log(bothParentsResult);