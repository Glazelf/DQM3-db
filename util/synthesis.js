module.exports = async ({ parents = [], target, traits = [] }) => {
    // Behaviour:
    // 1. parent1 & parent 2 --> return results
    // 2. 1 parent --> return options for synthesis with that parent
    // 3. 1 parent & target --> return options (or path) to get from 1 parent to target
    // 4. target --> return options to synthesize target
    // 5. All 3 --> check if parents synthesize into target
    const monsters = require('../objects/monsters.json');
    let synthesisResults = {
        familySynthesis: [],
        uniqueSynthesis: []
    };
    let parent1data = monsters[parents[0]];
    let parent2data = monsters[parents[1]];
    let parentsFamilies = [parent1data.family, parent2data.family];
    let parentsRanks = [parent1data.rank, parent2data.rank];
    let parentsAndFamilies = parents.concat(parentsFamilies);
    // Behaviour 1
    if (parents[0] && parents[1]) {
        for await (let [monsterId, monster] of Object.entries(monsters)) {
            if (!monster.synthesis) continue;
            monster.synthesis.forEach(pair => {
                // Check if fusion between both parents' families
                let familySynthesisBool = (pair.filter((element) => !parentsFamilies.includes(element)).length === 0 && parentsRanks.includes(monster.rank));
                // Check if fusion between both at least 1 parent and another parent or family
                let uniqueSynthesisBool = (pair.filter((element) => !parentsAndFamilies.includes(element)).length === 0 && pair.filter((element) => !parents.includes(element)).length < 2);
                if (familySynthesisBool) {
                    synthesisResults.familySynthesis.push(monsterId);
                } else if (uniqueSynthesisBool) {
                    synthesisResults.uniqueSynthesis.push(monsterId);
                };
            });
        };
        synthesisResults.familySynthesis = synthesisResults.familySynthesis.concat([parents[0], parents[1]]);
    };
    synthesisResults.familySynthesis = [...new Set(synthesisResults.familySynthesis)];
    synthesisResults.uniqueSynthesis = [...new Set(synthesisResults.uniqueSynthesis)];
    return synthesisResults;
};