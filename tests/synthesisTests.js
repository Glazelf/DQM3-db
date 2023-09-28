async function synthesisTests() {
    const synthesis = require('../util/synthesis');
    const monsters = require('../objects/monsters.json');
    // Variables
    let parent1 = "she_slime";
    let parent2 = "lampling";
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

    console.log(`parent1: ${parent1} + parent2: ${parent2}`);
    let bothParentsResult = await synthesis({ parents: parents, target: target, traits: traits });
    console.log(`Family Synths:`);
    console.log(bothParentsResult.familySynthesis);
    console.log(`Unique Synths:`);
    console.log(bothParentsResult.uniqueSynthesis);
};
synthesisTests();