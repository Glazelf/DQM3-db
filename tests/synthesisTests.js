async function synthesisTests() {
    const synthesis = require('../util/synthesis');
    const monsters = require('../objects/monsters.json');
    // Variables
    let parent1 = "she_slime";
    let parent2 = "lampling";
    let target = "box_slime";
    let parents = [];
    if (parent1) parents.push(parent1);
    if (parent2) parents.push(parent2);

    console.log(`Behaviour 1.\nparent1 ${parent1} + parent2: ${parent2} = target ${target}?`);
    let parentsAndTargetResult = await synthesis({ parents: parents, target: target });
    console.log(parentsAndTargetResult.boolean);
    console.log("----------------------------");
    console.log(`Behaviour 2.\nparent1: ${parent1} + parent2: ${parent2}`);
    let bothParentsResult = await synthesis({ parents: parents });
    console.log(`Unique Synths:`);
    console.log(bothParentsResult.uniqueSynthesis);
    console.log(`Family Synths:`);
    console.log(bothParentsResult.familySynthesis);
    console.log("Self Synths:");
    console.log(bothParentsResult.selfSynthesis);
};
synthesisTests();