/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let lcp = ''
    main:
    for(let i = 0; i < strs[0].length; i++){
        let curr = strs[0][i]
        for (let j = 0; j < strs.length; j++){
            if (strs[j][i] != curr) break main
        }
            lcp += curr
    }
    return lcp
    
};

// Testing

longestCommonPrefix(["flower","flow","flight"]) //Must equal 'fl'
longestCommonPrefix(["dog","racecar","car"]) //Must equal ''