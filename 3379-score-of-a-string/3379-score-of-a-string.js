/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
    let sum = 0
    let diff = 0
    for (i = 0; i < s.length-1; i++) {
        const diff = Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1))
        sum += diff

    }
    return sum
};