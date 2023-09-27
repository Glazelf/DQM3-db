module.exports = (parent1, parent2) => {
    let synthesisResults = [];
    const genericSynthesis = require('../objects/genericSynthesis.json');
    let parentsSameRank = (parent1.rank === parent2.rank);

    for (let key in genericSynthesis) {
        let keySplit = key.split("_");
        if (keySplit.has(parent1.family) && keySplit.has(parent2.family)) {
            synthesisResults.push(genericSynthesis[key][parent1.rank])
            if (!parentsSameRank) synthesisResults.push(genericSynthesis[key][parent2.rank])
        };
    };
    return synthesisResults;
};