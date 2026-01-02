/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let result = s.split(" ")
    let emty = []

    for(let i=0;i<result.length;i++){
        let word=result[i]
        let ans=""

        for(let j = word.length -1;j>=0;j--){
            ans += word[j]
        }
        emty.push(ans)
    }
    return emty.join(" ")
};