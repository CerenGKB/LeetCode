/* Given an integer n, return a counter function. This counter function initially returns n and 
then returns 1 more than the previous value every subsequent
 time it is called (n, n + 1, n + 2, etc).

 */

// ---SOLUTION---

/* Since we want to increase n's value depending on how many times we call the functio i just used 
a simple way to solve this which is basically just increasing the value by +1 everytime */

/**
 * @param {number} n
 * @return {Function} counter
 */


var createCounter = function(n) {
    return function() {
       return n++
    }
}
