//Day 7 - Javascript 30 day challenge

/* Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
The function composition of an empty list of functions is the identity function f(x) = x.
You may assume each function in the array accepts one integer as input and returns one integer as output. */


// -----  SOLUTION ---- 

/*     I actually solved this question a bit differently first, i created a for loop starting from last index 
going to 0 which also works but i wanted to learn if there is a faster way to do it.Since i know about
reduce method i looked at it to see if i can use it and i found about reduceRight method in documentation 
which works exactly like how i need it in this problem.It was a nice challenge to understand how it works 
so i can use it but i am happy with the result */



/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
        if (functions.length === 0) {
            return x 
        }
        return functions.reduceRight((acc,f) => f(acc),x)
    }
}