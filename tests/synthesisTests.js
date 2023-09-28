async function synthesisTests() {
    const synthesis = require('../util/synthesis');
    const monsters = require('../objects/monsters.json');
    // Variables
    let parent1 = "she_slime";
    let parent2 = "lampling";
    let target = null;
    let talent1 = null;
    let talent2 = null;
    let talent3 = null;
    let parents = [];
    if (parent1) parents.push(parent1);
    if (parent2) parents.push(parent2);
    let traits = [];
    if (talent1) traits.push(talent1);
    if (talent2) traits.push(talent2);
    if (talent3) traits.push(talent3);

    console.log(`parent1: ${parent1} + parent2: ${parent2}`);
    let bothParentsResult = await synthesis({ parents: parents, target: target, traits: traits });
    console.log(`Unique Synths:`);
    console.log(bothParentsResult.uniqueSynthesis);
    console.log(`Family Synths:`);
    console.log(bothParentsResult.familySynthesis);
};
synthesisTests();