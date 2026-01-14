/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {

    let cleaned = paragraph.toLowerCase();

    cleaned = cleaned.replace(/[^\w\s]/g, " ");

    const wordsArray = cleaned.split(" ");

    const bannedSet = new Set(banned);

    let freq = {};

    for (let word of wordsArray) {
        if (word !== "" && !bannedSet.has(word)) {
            freq[word] = (freq[word] || 0) + 1;
        }
    }

    let maxCount = 0;
    let result = "";

    for (let word in freq) {
        if (freq[word] > maxCount) {
            maxCount = freq[word];
            result = word;
        }
    }

    return result;
};
