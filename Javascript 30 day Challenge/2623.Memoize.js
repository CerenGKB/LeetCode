//Day 9- Javascript 30 day challenge


/* Given a function fn, return a memoized version of that function.
A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.
You can assume there are 3 possible input functions: sum, fib, and factorial.
sum accepts two integers a and b and returns a + b.
fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise. */


// ----- SOLUTION -----

/* This was the first question i had to do a bit research since i didnt know what memoize function does exactly,
after understanding the concept it was not hard to solve it.What i do here is creating a new variable called 
cache and initalize it on Map, so we take the function names and if doesnt exist in my Map Object,it will 
be saved as a new result,if it exists then we just get existing value.  */

/**
 * @param {Function} fn
 */
function memoize(fn) {

    const cache = new Map();
   
     return function(...args) {
       const key = JSON.stringify(args);
   
       if (cache.has(key)) {
         return cache.get(key);
       }
   
       const result = fn(...args);
       cache.set(key, result);
   
       return result;
     }
   }
   
   
   