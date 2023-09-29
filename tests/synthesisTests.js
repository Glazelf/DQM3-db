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
    let divider = "----------------------------------------";

    console.log(`parent1: ${parent1}\nparent2: ${parent2}\ntarget: ${target}`)
    console.log(`${divider}\nBehaviour 1.\n${parent1} + ${parent2} (= target ${target}? or routes to target)`);
    let parentsAndTargetResult = await synthesis({ parents: parents, target: target });
    console.log(parentsAndTargetResult.boolean);
    console.log("Routes are WIP.");
    console.log(`${divider}\nBehaviour 2.\n${parent1} + ${parent2} (all options)`);
    let bothParentsResult = await synthesis({ parents: parents });
    console.log(`Unique Synths:`);
    console.log(bothParentsResult.uniqueSynthesis);
    console.log(`Family Synths:`);
    console.log(bothParentsResult.familySynthesis);
    console.log("Self Synths:");
    console.log(bothParentsResult.selfSynthesis);
    console.log(`${divider}\nBehaviour 3.\nparent: ${parent1} (all UNIQUE options using 1 parent)`);
    console.log("WIP");
    console.log(`${divider}\nBehaviour 4.\n${parent1} ==> ${target} (routes to target)`);
    console.log("WIP");
    console.log(`${divider}\nBehaviour 5.\ntarget ${target} (all direct options into target)`);
    let targetOnlyResult = await synthesis({ target: target });
    console.log("Unique Synths:");
    console.log(targetOnlyResult.uniqueSynthesis);
    console.log("Family Synths:");
    console.log(targetOnlyResult.familySynthesis);
};
synthesisTests();