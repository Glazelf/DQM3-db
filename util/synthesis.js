const monstersJSON = require('../objects/monsters.json');
module.exports = async ({ parents = [], target }) => {
    // Behaviour:
    // 1. All 3 --> check if parents synthesize into target
    // 2. parent1 & parent 2 --> return results
    // 3. 1 parent --> return options for synthesis with that parent
    // 4. 1 parent & target --> return options (or path) to get from 1 parent to target
    // 5. target --> return options to synthesize target
    let synthesisResults = {
        familySynthesis: [],
        uniqueSynthesis: [],
        selfSynthesis: []
    };
    let synthesisCheckResults = { boolean: false, type: null, routes: [] }; // Types: "unique", "family", "self"
    let parent1Data = monstersJSON[parents[0]];
    let parent2Data = monstersJSON[parents[1]];
    let targetData = monstersJSON[target];
    // Behaviour scripts
    if (parent1Data && parent2Data && targetData) {
        // Behaviour 1
        if (parents.includes(target)) synthesisCheckResults.boolean = true;
        if (targetData.synthesis) {
            targetData.synthesis.forEach(pair => {
                if (!pair) return;
                if (!synthesisCheckResults.boolean) synthesisCheckResults = synthesisCheck({ pair: pair, target: target, parents: parents });
                if (!synthesisCheckResults.boolean) {
                    // Calculate routes
                    synthesisResults.routes = true;
                };
            });

        };
        synthesisResults = synthesisCheckResults;
    } else if (parent1Data && parent2Data && !targetData) {
        // Behaviour 2
        synthesisResults.selfSynthesis = synthesisResults.selfSynthesis.concat([parents[0], parents[1]]);
        for await (let [monsterID, monster] of Object.entries(monstersJSON)) {
            if (!monster.synthesis) continue;
            monster.synthesis.forEach(pair => {
                synthesisCheckResults = synthesisCheck({ pair: pair, parents: parents, target: monsterID });
                switch (synthesisCheckResults.type) {
                    case "family":
                        synthesisResults.familySynthesis.push(monsterID);
                        break;
                    case "unique":
                        synthesisResults.uniqueSynthesis.push(monsterID);
                        break;
                };
            });
        };
    } else if ((parent1Data || parent2Data) && !targetData) {
        // Behaviour 3
        // Wait untill there's more unique synths added by Zora to test
    } else if ((parent1Data || parent2Data) && targetData) {
        // Behaviour 4
        // Probably saving this untill full release
        synthesisResults.routes = true;
    } else if (!parent1Data && !parent2Data && targetData) {
        // Behaviour 5
        if (targetData.synthesis) {
            targetData.synthesis.forEach(pair => {
                if (!pair) return;
                if (pair[0].startsWith("_") && pair[1].startsWith("_")) {
                    synthesisResults.familySynthesis.push(pair);
                } else {
                    synthesisResults.uniqueSynthesis.push(pair);
                };
            });
        };
    };
    if (typeof synthesisResults == "object") {
        synthesisResults.familySynthesis = [...new Set(synthesisResults.familySynthesis)];
        synthesisResults.uniqueSynthesis = [...new Set(synthesisResults.uniqueSynthesis)];
    };
    return synthesisResults;
};
function getPairVariables(pair = []) {
    let parent1Family = pair[0]; // Assume arg is a family
    let parent2Family = pair[1];
    let parent1Rank = null;
    let parent2Rank = null;
    if (!pair[0].startsWith("_") && monstersJSON[pair[0]]) {
        parent1Family = monstersJSON[pair[0]].family;
        parent1Rank = monstersJSON[pair[0]].rank;
    }
    if (!pair[1].startsWith("_") && monstersJSON[pair[1]]) {
        parent2Family = monstersJSON[pair[1]].family;
        parent2Rank = monstersJSON[pair[1]].rank;
    };
    let pairFamilies = [parent1Family, parent2Family];
    let pairRanks = [parent1Rank, parent2Rank];
    let pairAndFamilies = pair.concat(pairFamilies);
    let pairVariables = { pairFamilies, pairRanks, pairAndFamilies };
    return pairVariables;
};
function synthesisCheck({ pair = [], target = "", parents = [] }) {
    let returnObject = { boolean: false, type: null };
    let pairVariables = getPairVariables(pair);
    let parentsVariables = getPairVariables(parents);
    let targetData = monstersJSON[target];
    // Check if fusion between both parents' families by filtering arrays against eachother, also taking into account ranks
    let familySynthesisBool = (pair.filter((element) => !parentsVariables.pairAndFamilies.includes(element)).length === 0 && parentsVariables.pairRanks.includes(targetData.rank));
    // Check if fusion between both at least 1 parent and another parent or family by filtering arrays against eachother, also taking into account one+ parent has to be a species
    let uniqueSynthesisBool = (pair.filter((element) => !parentsVariables.pairAndFamilies.includes(element)).length === 0 && (pair.filter((element) => !parents.includes(element)).length < 2));
    let synthesisType = null;
    if (familySynthesisBool) synthesisType = "family";
    if (uniqueSynthesisBool) synthesisType = "unique";
    let synthesisCheckResults = { boolean: (familySynthesisBool || uniqueSynthesisBool), type: synthesisType, routes: [] };
    return synthesisCheckResults;
};