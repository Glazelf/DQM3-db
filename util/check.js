const monsters = require('./monsters.json')
const talents = require('./talents.json')
const traits = require('./traits.json')
const skills = require('./skills.json')



monstertalents = []
monstertraits = []
incompletemonsters = []
for (monster in monsters) {
    if (monsters[monster].talents != null) {
        monstertalents.push(monsters[monster].talents[0])
    }

    if (monsters[monster].traits != null) {
        if (monsters[monster].traits.small != null) {
            keys = Object.keys(monsters[monster].traits.small)
            for (key in keys) {
                monstertraits.push(keys[key])
            }
        }
        if (monsters[monster].traits.large != null) {
            keys = Object.keys(monsters[monster].traits.large)
            for (key in keys) {
                monstertraits.push(keys[key])
            }
        }
    }

    m = monsters[monster]
    if (m.name == null || m.rank == null || m.family == null ||  m.growth == null || m.talents == null || m.traits == null || m.resistances == null) {
        if (m.rank != 'E') {
            incompletemonsters.push(monster)
        }
    }
}

monstertalents = [... new Set(monstertalents)]
monstertraits = [... new Set(monstertraits)]

doctalents = []
doctalentskills = []
doctalenttraits = []
for (talent in talents) {
    doctalents.push(talent)

    if (talents[talent].skills != null) {
        keys = Object.keys(talents[talent].skills)
        for (key in keys) {
            doctalentskills.push(keys[key])
        }
    }
    if (talents[talent].traits != null) {
        keys = Object.keys(talents[talent].traits)
        for (key in keys) {
            doctalenttraits.push(keys[key])
        }
    }
}

doctalentskills = [... new Set(doctalentskills)]
doctalenttraits = [... new Set(doctalenttraits)]

doctraits = []
for (trait in traits) {
    doctraits.push(trait)
}

docskills = []
for (skill in skills) {
    docskills.push(skill)
}

if (incompletemonsters.length != 0){
    console.log("Incomplete monsters (monsters that are in monsters.json but are missing at least one of the following: name, rank, family, growth, talents, traits, resistances):")
    console.log("Excluding: numbers, large traits, synthesis and rank 'E' monsters:")
    for (i in incompletemonsters) {
        console.log("    " + incompletemonsters[i])
    }
}

console.log("Missing talents (talents that are in monsters.json but aren't in talents.json):")
for (i in monstertalents) {
    if (!doctalents.includes(monstertalents[i])) {
        console.log("    " + monstertalents[i])
    }
}

console.log("Missing traits (traits that are in monsters.json but aren't in traits.json):")
for (i in monstertalents) {
    if (!doctraits.includes(monstertraits[i])) {
        console.log("    " + monstertraits[i])
    }
}

console.log("Missing talent skills (skills that are in talents.json but aren't in skills.json):")
for (i in doctalentskills) {
    if (!docskills.includes(doctalentskills[i])) {
        console.log("    " + doctalentskills[i])
    }
}

console.log("Missing talent traits (skills that are in talents.json but aren't in traits.json):")
for (i in doctalenttraits) {
    if (!doctraits.includes(doctalenttraits[i])) {
        console.log("    " + doctalenttraits[i])
    }
}