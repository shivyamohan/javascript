/*13. Roman to Integer
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

Example 1:
==========
Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:
==========
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:
==========
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let mynum = 0;
    let i = 0;
    while(i<s.length){
        if(s[i] == 'I'){
            if(s[i+1] == 'V'){
                mynum += 4;
                i++;
            }
            else if(s[i+1] == 'X'){
                mynum += 9;
                i++;
            }
            else{
                mynum += 1;
            }
            
        }
        else if(s[i] == 'V'){
            mynum += 5;
        }
        else if(s[i] == 'X'){
            if(s[i+1] == 'L'){
                mynum += 40;
                i++;
            }
            else if(s[i+1] == 'C'){
                mynum += 90;
                i++;
            }
            else{
                mynum += 10;
            }
        }
        else if(s[i] == 'L'){
            mynum += 50;
        }
        else if(s[i] == 'C'){
            if(s[i+1] == 'D'){
                mynum += 400;
                i++;
            }
            else if(s[i+1] == 'M'){
                mynum += 900;
                i++;
            }
            else{
                mynum += 100;
            }
        }
        else if(s[i] == 'D'){
            mynum += 500;
        }
        else if(s[i] == 'M'){
            mynum += 1000;
        }
        i++;
    }
    return mynum;
};

(or)

/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    var result = 0;
    for(var i = 0; i < s.length; i++){
        var val_1 = symbolToValue(s[i]);
        var val_2 = symbolToValue(s[i + 1]);
        if(val_2 > val_1){
            result += val_2 - val_1;
            i++;
        }else{
            result += val_1;
        }
    }
    return result;
};

function symbolToValue(r){
    switch(r){
        case "I":
            return 1
        case "V":
            return 5
        case "X":
            return 10
        case "L":
            return 50
        case "C":
            return 100
        case "D":
            return 500
        case "M":
            return 1000
    }
}