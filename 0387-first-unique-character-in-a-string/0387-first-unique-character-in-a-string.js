/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
   for(let i=0;i<s.length;i++){
    let isunique=true

    for(let j=0;j<s.length;j++){
        if (i !== j && s[i]===s[j]){ 
            isunique = false;
            break;
        }
    }
    if(isunique) return i;

   }
     return -1
};