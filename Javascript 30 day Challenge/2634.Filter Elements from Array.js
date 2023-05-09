//Day 5- Javascript 30 day challenge


/* 
Given an integer array arr and a filtering function fn, return a new array with a fewer or equal number of elements.
The returned array should only contain elements where fn(arr[i], i) evaluated to a truthy value.
Please solve it without the built-in Array.filter method. */



//------ SOLUTION ------

/* The logic for this was one almost identical with 2635.Question(it was about mapping over array without using
map method) only difference was this time i am only pushing the values that are passing function's condition 
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let newArr = [];
 
 for (let i = 0; i < arr.length; i++) {
   if(fn(arr[i],i)){
    newArr.push(arr[i])
   }
 }
 return newArr
}

