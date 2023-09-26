let monsters = {
    slime: {
        name: "Slime",
        rank: "G",
        number: 1,
        family: "Slime",
        description: "Adored by all for its flexy physique and funny face, this little monster is something of an icon. Who wouldn't want one for a pal?",
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
            small: {
                zap_meister: 1,
                critical_triumph: 20,
                big_bully: 40
            },
            large: {
                tactical_genius: 1,
                insta_accel: 1,
                ultra_crafty_zapper: 60
            }
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
            mp_absorption: -25,
            confusion: 25,
            sleep: 0,
            paralysis: 50,
            stun: 0,
            poison: 25,
            instant_death: 0
        }
    },
    wing_slime: {
        name: "Wing Slime",
        rank: "G",
        number: 6,
        family: "Slime",
        description: "Slimes which sprouted wings after dreaming of soaring through the sky. Their wings double up as a snug sleeping bag at night.",
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
            small: {
                ace_evader: 1,
                health_professional: 20,
                ultra_crafty_woosher: 40
            },
            large: {
                tactical_commander: 1,
                wizardly_wind: 1,
                absorbent_touch: 60
            }
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
            mp_absorption: -25,
            confusion: 0,
            sleep: 0,
            paralysis: 50,
            stun: 50,
            poison: 0,
            instant_death: 0
        }
    },
    bubble_slime: {
        name: "Bubble Slime",
        number: 7,
        description: null
    },
    dragonthorn: {
        name: "Dragonthorn",
        rank: "G",
        number: 65,
        family: "Dragon",
        description: "Cursed thickets of thorn tangled into draconic shape. Those entwined in their terrifying clutches have no hope of escape.",
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
            small: {
                spiky_skin: 1,
                sleepy_touch: 20,
                ultra_crafty_paralyser: 40
            },
            large: {
                tactical_genius: 1,
                uber_beastbane: 1,
                major_downer: 60
            }
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
            mp_absorption: 50,
            confusion: 0,
            sleep: 25,
            paralysis: 0,
            stun: 50,
            poison: -25,
            instant_death: 0
        }
    },

    komodo: {
        name: "Komodo",
        number: 66,
        description: "Nippy little dragons who have learned to stand on their highly developed hind legs. At full pelt they can outpace a racehorse, but haven't yet mastered the subtle art of slowing down."
    },
    vegandragora: {
        name: "Vegandragora",
        number: 69,
        description: "Dragons which live in harmony with herbs and flowers. They love nothing more than basking in the sun and will get together to lap up the sun's rays on summer days."
    },
    damselfly: {
        name: "Damselfly",
        number: 70,
        description: null
    },
    lumbering_lizard: {
        name: "Lumbering Lizard",
        number: 89,
        description: null
    },
    bantamweight: {
        name: "Bantamweight",
        number: 136,
        description: "These thumping great chickens have learned how to fly. Thanks to their highly-developed flight muscles, they can strike with the power of a trainer pugilist."
    },
    killerpillar: {
        name: "Killerpillar",
        number: 138,
        description: "Though these creepy-crawlies might look like larvae, they are in fact fully grown. They keep themselves warm in cold weather by rolling up into snug little balls."
    },
    capsichum: {
        name: "Capsichum",
        number: 139,
        description: "These terrible twins are in fact born already skewered. Always butting heads, they are often witnessed mid-argument."
    },
    mad_mollusk: {
        name: "Mad Mollusk",
        number: 141,
        description: null
    },
    woebergine: {
        name: "Woebergine",
        number: 142,
        description: "These adorable vegetable-based monsters are proud of their ability to cut some rug. Any traveller straying into their terrain should be prepared to see them strut their stuff."
    },
    khalamari_kid: {
        name: "Khalamari Kid",
        number: 144,
        description: "These squid-like squirts are baby khalamri. Though small in stature, they're as tough as any full-grown sea-dweller."
    },
    antguzzler: {
        name: "Antguzzler",
        number: 205,
        description: "These long-snouted monsters resemble spiny anteaters. Their length tongues are well-adapted to slurping army ants up from their nests."
    },
    mischievous_mole: {
        name: "Mischievous Mole",
        number: 206,
        description: "These tunnelling tykes traditionally loved to play pranks, but these days tend to keep their heads down and focus on digging."
    },
    bunicorn: {
        name: "Bunicorn",
        number: 207,
        description: "These creatures might resemble rabbits, but meet one of their horns head-on and you'll understand the difference rather sharpish. They pass the long nights huddled together in their warrens."
    },
    feralball: {
        name: "Feralball",
        number: 213,
        description: "This flufball is covered in green fur from top to toe. Though easily spooked, those with sharp eyes might spot something funny where this beastie's nose should be before it scarpers."
    },
    leery_lout: {
        name: "Leery Lout",
        number: 354,
        description: null
    },
    dracky: {
        name: "Dracky",
        number: 355,
        description: "These flapping pains in the neck only come out at night. They love nothing more than slurping up human blood, the fresher the better."
    },
    lunatick: {
        name: "Lunatick",
        number: 359,
        description: null
    },
    teeny_sanguini: {
        name: "Teeny Sanguini",
        number: 360,
        description: "Baby monsters known for their distinctive bovine markings. Considered to be fully-grown once the black fur grows out, replaced entirely with a ravishing shade of rose pink."
    },
    lips: {
        name: "Lips",
        number: 361,
        description: null
    },
    gigantes: {
        name: "Gigantes",
        number: 376,
        description: null
    },
    putrefido: {
        name: "Putrefido",
        number: 428,
        description: null
    },
    funghoul: {
        name: "Funghoul",
        number: 429,
        description: null
    },
    skeleton: {
        name: "Skeleton",
        number: 431,
        description: "Recycled from the bodies of fallen warriors, these unfortunate cadavers truly get worked to the bone."
    },
    stump_chump: {
        name: "Stump Chump",
        number: 432,
        description: "The tragic remains of chopped-down trees whose deep-seated malice has made them morph into monsters. They attack travellers who try to sit on them, sucking out all their nutrients before discarding the husk."
    },
    ghost: {
        name: "Ghost",
        number: 433,
    },
    fright_bulb: {
        name: "Fright Bulb",
        rank: "G",
        number: null,
        family: "Slime",
        description: null,
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
            small: {
                ultra_craftystunner: 1,
                evasive_impulse: 20,
                ace_evader: 40
            },
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
            mp_absorption: -25,
            confusion: 50,
            sleep: 0,
            paralysis: 50,
            stun: 0,
            poison: 0,
            instant_death: 0
        }
    }
};