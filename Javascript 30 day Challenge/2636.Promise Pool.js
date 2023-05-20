// Day 13 - Javascript 30 day challenge

/* Given an array of asyncronous functions functions and a pool limit n, return an asyncronous function promisePool. It should 
return a promise that resolves when all the input functions resolve.Pool limit is defined as the maximum number promises that can be pending at once.
promisePool should begin execution of as many functions as possible and continue executing new functions when old promises resolve. promisePool should execute functions[i] then functions[i + 1] then functions[i + 2], etc.
When the last promise resolves, promisePool should also resolve.For example, if n = 1, promisePool will execute one function at a time in series. 
However, if n = 2, it first executes two functions. When either of the two functions resolve, a 3rd function should be executed (if available), and so on until there are no functions left to execute.
You can assume all functions never reject. It is acceptable for promisePool to return a promise that resolves any value. */


// ------ SOLUTION ------