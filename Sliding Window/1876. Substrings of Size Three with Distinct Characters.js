
// Question

/* A string is good if there are no repeated characters.
Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.
Note that if there are multiple occurrences of the same substring, every occurrence should be counted.
A substring is a contiguous sequence of characters in a string. */


// ------ SOLUTION -------

/* 
In this solution since we are looking for uniqueness we can use Set() but i wanted to solve it without it 
What i do here is :
1- first i create 2 variabled called count and subString, count is zero and subString is an array
2- then i start my iteration on given array
3- for each element i push it to end of my new array called subString
4- in the same loop i first check if substring has length of >3 if yes then i remove the first element
5 -if it is exactly length of three like we intended (this is the point i could use set but didnt prefer to),
i check first two characters , second- third character and lastly first-third character and if none of them match
count is increased by 1 as a unique set of string formed by 3 letters

In summary my window is my array here and everytime i am updating i remove the first element and add the latest one


*/



/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let count = 0
    let subString = []

    for (let i = 0; i < s.length; i++) {
        subString.push(s[i])

        if (subString.length > 3) {
            subString.shift()
        }

        if (subString.length === 3) {
            if (subString[0] !==subString[1] && subString[0] !== subString[2] && subString[1] !== subString[2]) {
                count++
            }
        }
    }

    return count
};