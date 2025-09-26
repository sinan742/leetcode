/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle.length === 0) return 0;
    const n = haystack.length
    const m = needle.length

    for(let i=0 ;i<=n-m;i++){
        let j = 0 
        for (; j < m; j++) {
      if (haystack[i + j] !== needle[j]) break;
    }
    if(j==m)return i
    }
   return -1
};