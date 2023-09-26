let monsters = {
    slime: {
        name: "Slime",
        rank: "G",
        number: 1,
        family: "Slime",
        growth: {
            hp: 1,
            mp: 2,
            atk: 1,
            def: 1,
            agi: 3,
            wis: 1
        },
        talents: ["slimer"],
        traits: {
            small: { zapmeister: 1, criticaltriumph: 20, bigbully: 40 },
            large: { tacticalgenius: 1, instaaccel: 1, ultracraftyzapper: 60 }
        },
        resistances: {
            fire: 0,
            water: 50,
            wind: 0,
            earth: -25,
            explosions: 50,
            ice: 0,
            electricity: 50,
            light: 50,
            dark: -25,
            debilitation: 25,
            bedazzlement: 50,
            antimagic: 0,
            mpabsorption: -25,
            confusion: 25,
            sleep: 0,
            paralysis: 50,
            stun: 0,
            poison: 25,
            instantdeath: 0
        }
    },
    wingslime: {
        name: "Wing Slime",
        rank: "G",
        number: 6,
        family: "Slime",
        growth: {
            hp: 1,
            mp: 3,
            atk: 2,
            def: 1,
            agi: 3,
            wis: 2
        },
        talents: ["blusterer"],
        traits: {
            small: { aceevader: 1, healthprofessional: 20, ultracraftywoosher: 40 },
            large: { tacticalcommander: 1, wizardlywind: 1, absorbenttouch: 60 }
        },
        resistances: {
            fire: 0,
            water: 0,
            wind: 75,
            earth: -25,
            explosions: 50,
            ice: 0,
            electricity: 50,
            light: 25,
            dark: -25,
            debilitation: 0,
            bedazzlement: 50,
            antimagic: 25,
            mpabsorption: -25,
            confusion: 0,
            sleep: 0,
            paralysis: 50,
            stun: 50,
            poison: 0,
            instantdeath: 0
        }
    },
    dragonthorn: {
        name: "Dragonthorn",
        rank: "G",
        number: 65,
        family: "Dragon",
        growth: {
            hp: 1,
            mp: 1,
            atk: 2,
            def: 3,
            agi: 2,
            wis: 1
        },
        talents: ["blowy_slasher"],
        traits: {
            small: { spikyskin: 1, sleepytouch: 20, ultracraftyparalyser: 40 },
            large: { tacticalgenius: 1, uberbeastbane: 1, majordowner: 60 }
        },
        resistances: {
            fire: 50,
            water: -25,
            wind: 0,
            earth: 25,
            explosions: 50,
            ice: 0,
            electricity: 0,
            light: 50,
            dark: 0,
            debilitation: -25,
            bedazzlement: 50,
            antimagic: 25,
            mpabsorption: 50,
            confusion: 0,
            sleep: 25,
            paralysis: 0,
            stun: 50,
            poison: -25,
            instantdeath: 0
        }
    },
    frightbulb: {
        name: "Fright Bulb",
        rank: "G",
        number: null,
        family: "Slime",
        growth: {
            hp: 1,
            mp: 3,
            atk: 2,
            def: 2,
            agi: 2,
            wis: 2
        },
        talents: ["soothesayer"],
        traits: {
            small: { ultracraftystunner: 1, evasiveimpulse: 20, aceevader: 40 },
            large: {}
        },
        resistances: {
            fire: 0,
            water: 25,
            wind: 0,
            earth: 25,
            explosions: 0,
            ice: 25,
            electricity: 50,
            light: 25,
            dark: 0,
            debilitation: 25,
            bedazzlement: 50,
            antimagic: 0,
            mpabsorption: -25,
            confusion: 50,
            sleep: 0,
            paralysis: 50,
            stun: 0,
            poison: 0,
            instantdeath: 0
        }
    }
};