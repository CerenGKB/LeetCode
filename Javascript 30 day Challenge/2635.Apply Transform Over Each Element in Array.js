//Day 4- Javascript 30 day challenge

/* 
Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
The returned array should be created such that returnedArray[i] = fn(arr[i], i).
Please solve it without the built-in Array.map method.

  */


//------- SOLUTION -----------

/* 
Since we are not allowed to use map method,i thought creating a new array and pushing modified versions after looping
through our original array seemed like a logical way for me.I also think it is both readable and not too complicated 
for someone else that is trying to understand it
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var map = function(arr, fn) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      let mappedVal = fn(arr[i], i)
      newArr.push(mappedVal)
    }
    return newArr
  }