/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const seen = new Set();

  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    n = sumSquareDigits(n);
  }

  return n === 1;

  function sumSquareDigits(x) {
    let s = 0;
    while (x > 0) {
      let d = x % 10;
      s += d * d;
      x = Math.floor(x / 10);
    }
    return s;
  }
};