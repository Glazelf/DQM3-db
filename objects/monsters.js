let monsters = {
    slime: {
        name: "Slime",
        rank: "G",
        number: 1,
        family: "Slime",
        desc: "Adored by all for its flexy physique and funny face, this little monster is something of an icon. Who wouldn't want one for a pal?",
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
        desc: "Slimes which sprouted wings after dreaming of soaring through the sky. Their wings double up as a snug sleeping bag at night.",
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
    dragonthorn: {
        name: "Dragonthorn",
        rank: "G",
        number: 65,
        family: "Dragon",
        desc: "Cursed thickets of thorn tangled into draconic shape. Those entwined in their terrifying clutches have no hope of escape.",
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
    fright_bulb: {
        name: "Fright Bulb",
        rank: "G",
        number: null,
        family: "Slime",
        desc: null,
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