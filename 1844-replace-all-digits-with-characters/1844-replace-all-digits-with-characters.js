/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let arr = s.split("")

    for(let i=1;i < arr.length;i += 2){
        let prev = arr[i -1].charCodeAt(0)
        let shift = Number(arr[i])

    arr[i] = String.fromCharCode(prev + shift)

    }
    return arr.join("")
};