/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let res = parseInt(x.toString().split('').reverse().join('')) * Math.sign(x)
    if (res < Math.pow(-2, 31) || res > Math.pow(2, 31) - 1) {
        return 0
    }
    return res
};