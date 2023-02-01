/**
 * @param {string} s
 * @return {number}
 */

 let values = {
     'I': 1,
     'V': 5,
     'X': 10,
     'L': 50,
     'C': 100,
     'D': 500,
     'M': 1000,

 }
var romanToInt = function(s) {
    let arr = s.split(''),
        result = 0

    for (let i = 0, j = 1; i < arr.length; i++, j++){
        if (values[arr[j]] > values[arr[i]]){
        result += values[arr[j]] - values[arr[i]]
        i++
        j++
        }
        else{
        result += values[arr[i]]

        }
    }

    return result
    };

romanToInt("III") /*must equal 3*/
romanToInt("LVIII") /*must equal 58*/
romanToInt("MCMXCIV") /*must equal 1994*/