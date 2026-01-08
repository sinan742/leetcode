/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const first ="qwertyuiop"
    const second = "asdfghjkl"
    const third = "zxcvbnm"

    const result = []

    for(let word of words){
        let w=word.toLowerCase();

        let row;

        if (first.includes(w[0])) row=first;
        else if (second.includes(w[0])) row = second;
        else row = third

        let valid = true;
        for(let ch of w){
            if(!row.includes(ch)){
                valid = false
                break;
            }
        }
        if(valid) result.push(word)
    }
    return result

};