/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
  return names
  .map((name,i)=>[name,heights[i]])
  .sort((a,b)=>b[1] - a[1])
  .map((person)=>person[0])

};