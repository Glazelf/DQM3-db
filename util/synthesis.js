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
        uniqueSynthesis: []
    };
    let synthesisCheckResults = { boolean: false, type: null, routes: [] }; // Types: "unique", "family", "self"
    let familySynthesisBool = false;
    let uniqueSynthesisBool = false;
    let parent1Data = monstersJSON[parents[0]];
    let parent2Data = monstersJSON[parents[1]];
    let targetData = monstersJSON[target];
    // Behaviour scripts
    if (parents[0] && parents[1] && target) {
        // Behaviour 1
        if (targetData.synthesis) {
            targetData.synthesis.forEach(pair => {
                console.log(pair)
                if (!pair) return;
                validSynthesisBool = synthesisCheck({ pair: pair, target: target });
                if (!validSynthesisBool) {
                    // Calculate routes
                };
            });
        };
        synthesisResults = synthesisCheckResults;
    } else if (parents[0] && parents[1] && !target) {
        // Behaviour 2
        for await (let [monsterId, monster] of Object.entries(monstersJSON)) {
            if (!monster.synthesis) continue;
            monster.synthesis.forEach(pair => {

                synthesisCheckResults = synthesisCheck({ pair: pair, target: target });
                if (familySynthesisBool) {
                    synthesisResults.familySynthesis.push(monsterId);
                } else if (uniqueSynthesisBool) {
                    synthesisResults.uniqueSynthesis.push(monsterId);
                };
            });
        };
        synthesisResults.familySynthesis = synthesisResults.familySynthesis.concat([parents[0], parents[1]]);
    } else if ((parents[0] || parents[1]) && !target) {
        // Behaviour 3
    } else if ((parents[0] || parents[1]) && target) {
        // Behaviour 4
    } else if (!parents[0] && !parents[1] && target) {
        // Behaviour 5
    } else {
        // Error?
    };
    if (typeof synthesisResults == "object") {
        synthesisResults.familySynthesis = [...new Set(synthesisResults.familySynthesis)];
        synthesisResults.uniqueSynthesis = [...new Set(synthesisResults.uniqueSynthesis)];
    };
    return synthesisResults;
};
// Check if fusion between both parents' families
function familySynthesis({ pair = [], target = "" }) {
    let { parentsFamilies, parentsRanks, parentsAndFamilies } = getPairVariables(pair);
    let familySynthesisBool = (pair.filter((element) => !parentsFamilies.includes(element)).length === 0 && parentsRanks.includes(target.rank));
    return familySynthesisBool;
};
// Check if fusion between both at least 1 parent and another parent or family
function uniqueSynthesis(pair) {
    let pairVariables = getPairVariables(pair);
    let uniqueSynthesisBool = (pair.filter((element) => !parentsAndFamilies.includes(element)).length === 0 && pair.filter((element) => !pair.includes(element)).length < 2);
    return uniqueSynthesisBool;
};
function getPairVariables(pair = []) {
    let parent1Family = pair[0]; // Assume arg is a family
    console.log(pair[0]);
    console.log(pair[1]);
    if (!pair[0].startsWith("_") && monstersJSON[pair[0]].family) parent1Family = monstersJSON[pair[0]].family;
    let parent2Family = pair[1];
    if (!pair[1].startsWith("_") && monstersJSON[pair[1]].family) parent2Family = monstersJSON[pair[1]].family;
    let parentsFamilies = [parent1Family, parent2Family];
    let parentsRanks = [monstersJSON[pair[0]].rank, monstersJSON[pair[0]].rank];
    let parentsAndFamilies = pair.concat(parentsFamilies);
    let pairVariables = { parentsFamilies, parentsRanks, parentsAndFamilies };
    return pairVariables;
};
function synthesisCheck({ pair = [], target = "" }) {
    let returnObject = { boolean: false, type: null };
    let pairVariables = getPairVariables(pair);
    let familySynthesisBool = familySynthesis({ pair: pair, target: target });
    let uniqueSynthesisBool = uniqueSynthesis({ pair: pair, target: target });
    let synthesisType = null;
    if (familySynthesisBool) synthesisType = "family";
    if (uniqueSynthesisBool) synthesisType = "unique";
    // check self type
    let synthesisCheckResults = { boolean: (familySynthesisBool || uniqueSynthesisBool), type: synthesisType, routes: [] }
};