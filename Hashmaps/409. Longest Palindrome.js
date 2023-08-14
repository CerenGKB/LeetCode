// Question - Longest Palindrome

/* 
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd",
whose length is 7.

*/

// SOLUTION 

/*  
This was relatively an easy question on hashmaps.Here are the steps i took the solve it

1 - Creating an empty object for the letters
2 - Creating 2 variables called evencount and oddcount to use later
3 - If the length is 1 it is a speacial case o i just return 1 
4 - In a for loop i add every letter and increase its frequency if i find more
5 - For it to be palindrome except the letter in middle all other letters has to be reoccur in even numbers
6 - So in another for loop i check if occurence is even and if it is i add its value to my evenNumber then i check the odd ones 
and since they can exist as an even number i decrease its value by 1 and add it to my evenCount too
7 - Then i add extra 1 if i find an odd value here(we have to add this as a condition because if we just add 1 assuming there will be an oddNum we might fail cases that consists of even numbered letters only)


*/


/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {

    let palindrome = {}
    let evenCount = 0
    let oddCount = 0

    if(s.length === 1){
        return 1
    }

    for(let i=0 ; i< s.length ; i++){
         palindrome[s[i]] = (palindrome[s[i]] || 0) + 1
    }

    for(let val in palindrome){
        if(palindrome[val] % 2 === 0 ){
            evenCount += palindrome[val]
        }else if(palindrome[val] % 2 !== 0){
            evenCount += (palindrome[val] - 1)
            oddCount = 1
        }
    }

    return evenCount + oddCount

};
