/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const res = []
    for(let i=0;i<s.length;i++){
        if(res.length && res[res.length -1] === s[i]){
            res.pop()
        }
        else{
            res.push(s[i])
        }
    }
    return res.join("")
};