//Day 6 - Javascript 30 day challenge

/* Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.
A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... 
until every element in the array has been processed. The final value of val is returned.
If the length of the array is 0, it should return init.
Please solve it without using the built-in Array.reduce method. */


// -------SOLUTION --------

/*      Since this is a reduce function i needed to initialize a value called total so i can add my values to it
and i use the 0th index of the nums array(i could use only init for initialization i know but wanted to do it
this way,no specific reason).I start my for loop from 1 since 0th index is gone then i add every value to my total.
They are in an if else statement because if the array is empty when they first pass it,it should still return a value
otherwise it shows an error */


/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if(nums.length === 0){
       return init
    }else{
       let total = fn(init,nums[0])
       for(let i=1 ; i<nums.length ;i++){
        total = fn(total,nums[i])
      }
      return total
    }
      
  };