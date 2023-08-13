// Question * Valid Parantheses

/* 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type. */

// My solution 

/* 
NOTE : Even though solving this question with stack-queue approach is much faster but i wanted to solve it with my first approach too.
Since i am using a recursive approach it is slow in terms of time complexity

So here are the steps i am taking in this solution

1 - i create my recursive function called removePairs
2 - first i check if str is empty and if it is,it will return ""
3 - I create a variable called replaced which is equal to my string
4 - then in each line i check if it contains a pair and if it does i remove them(i could chain replace instead of writing 3 separate lines but i thought it is easier to read this way)
5 - After replace i check if str length is equal to replaced, since if there were no pairs it wont change anything and it should return false i so return my str
6 - Then i call my function until there is nothing more to replace
7 - from my recursive function there can be 2 return statements. One of them is empty string while other is a string with some length
Therefore i check if returned str has the length of 0 if it does then function will return true and if it doesnt it will return false


 */
var isValid = function(s) {
  
    function removePairs(str) {
         if (!str) return "";
         
         let replaced = str
 
         replaced = replaced.replace('()', '');
         replaced = replaced.replace('{}', '');
         replaced = replaced.replace('[]', '');
 
 
         if (replaced.length === str.length) return str;
         
         return removePairs(replaced);
     }
 
     return removePairs(s).length === 0;
 };