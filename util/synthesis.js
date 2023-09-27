module.exports = (parent1, parent2, target) => {
    // Behaviour:
    // 1. parent1 & parent 2 --> return results
    // 2. 1 parent --> return options for synthesis with that parent
    // 3. 1 parent & target --> return options (or path) to get from 1 parent to target
    // 4. target --> return options to synthesize target
    // 5. All 3 --> check if parents synthesize into target
    const monsters = require('../objects/monsters.json');
    const genericSynthesis = require('../objects/genericSynthesis.json');
    let synthesisResults = [];
    let parent1data = monsters[parent1];
    let parent2data = monsters[parent2];
    let parentsSameRank = (parent1data.rank === parent2data.rank);
    // Behaviour 1
    if (parent1 && parent2) {
        for (let key in genericSynthesis) {
            let keySplit = key.split("_");
            if (keySplit.includes(parent1data.family) && keySplit.includes(parent2data.family) && parent1data.family !== parent2data.family) {
                synthesisResults = synthesisResults.concat(genericSynthesis[key][parent1data.rank])
                if (!parentsSameRank) synthesisResults = synthesisResults.concat(genericSynthesis[key][parent2data.rank])
            };
        };
        synthesisResults = synthesisResults.concat([parent1, parent2]);
    };
    synthesisResults = [...new Set(synthesisResults)];
    return synthesisResults;
};