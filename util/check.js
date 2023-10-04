const monsters = require('../objects/monsters.json');
const talents = require('../objects/talents.json');
const traits = require('../objects/traits.json');
const skills = require('../objects/skills.json');

let monsterTalents = [];
let monsterTraits = [];
let incompleteMonsters = [];
let keys = null;
for (let monster in monsters) {
    if (monsters[monster].talents != null) {
        monsterTalents.push(monsters[monster].talents[0]);
    };

    if (monsters[monster].traits != null) {
        if (monsters[monster].traits.small != null) {
            keys = Object.keys(monsters[monster].traits.small);
            for (let key in keys) {
                monsterTraits.push(keys[key]);
            };
        };
        if (monsters[monster].traits.large != null) {
            keys = Object.keys(monsters[monster].traits.large);
            for (let key in keys) {
                monsterTraits.push(keys[key]);
            };
        };
    };

    let m = monsters[monster];
    if (m.name == null || m.rank == null || m.family == null || m.growth == null || m.talents == null || m.traits == null || m.resistances == null) {
        if (m.rank != 'E') {
            incompleteMonsters.push(monster);
        };
    };
};

monsterTalents = [... new Set(monsterTalents)];
monsterTraits = [... new Set(monsterTraits)];

let docTalents = [];
let docTalentSkills = [];
let docTalentTraits = [];
for (let talent in talents) {
    docTalents.push(talent);

    if (talents[talent].skills != null) {
        keys = Object.keys(talents[talent].skills);
        for (let key in keys) {
            docTalentSkills.push(keys[key]);
        };
    };
    if (talents[talent].traits != null) {
        keys = Object.keys(talents[talent].traits);
        for (let key in keys) {
            docTalentTraits.push(keys[key]);
        };
    };
};

docTalentSkills = [... new Set(docTalentSkills)];
docTalentTraits = [... new Set(docTalentTraits)];

doctraits = []
for (trait in traits) {
    doctraits.push(trait);
};

docskills = []
for (skill in skills) {
    docskills.push(skill);
};

if (incompleteMonsters.length != 0) {
    console.log("Incomplete monsters (monsters that are in monsters.json but are missing at least one of the following: name, rank, family, growth, talents, traits, resistances):");
    console.log("Excluding: numbers, large traits, synthesis and rank 'E' monsters:");
    for (i in incompleteMonsters) {
        console.log("    " + incompleteMonsters[i]);
    };
};

console.log("Missing talents (talents that are in monsters.json but aren't in talents.json):");
for (i in monsterTalents) {
    if (!docTalents.includes(monsterTalents[i])) {
        console.log("    " + monsterTalents[i]);
    };
};

console.log("Missing traits (traits that are in monsters.json but aren't in traits.json):");
for (i in monsterTalents) {
    if (!doctraits.includes(monsterTraits[i])) {
        console.log("    " + monsterTraits[i]);
    };
};

console.log("Missing talent skills (skills that are in talents.json but aren't in skills.json):");
for (i in docTalentSkills) {
    if (!docskills.includes(docTalentSkills[i])) {
        console.log("    " + docTalentSkills[i]);
    };
};

console.log("Missing talent traits (skills that are in talents.json but aren't in traits.json):");
for (i in docTalentTraits) {
    if (!doctraits.includes(docTalentTraits[i])) {
        console.log("    " + docTalentTraits[i]);
    };
};