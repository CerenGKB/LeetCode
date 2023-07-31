/* Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order. */

// For this since it is a very known problem i just wanted to take notes of 2 solutions

//The first solution below has O(n^2) time complexity therefore it is not efficient but since it is the simplest approach that most people would think at first glance when they look at the question i wanted to include it
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // we need 2 loops 
    //First loop will start at index 0 and iterate over everything
    //Second loop should start at current index of i + 1 because we dont want same item to be summed it is not allowed
    //then we check the sums and if it matches target we return indices of correct value's
    for(let i=0 ; i < nums.length ; i++){
        for(let j= i+1 ; j< nums.length ; j++){
            //if values at i + j gives targes return that value
            if(nums[i] + nums[j] === target ){
                return ([i,j])
            }
        }
    }

};
console.log(twoSum([1,3,6,7], 10))




//The second solution has O(n) time complexity which is far more efficient compared to O(n^2)


var twoSumMap = function(nums, target) {
    //first we create an object because javascript can handle objects much faster than arrays since reaching for a key takes constant time
    let numMap = {}
    for(let i = 0; i < nums.length; i++) {
        /* We start iterating over the nums array.
        On each value we exclude it from target and assing it to a variable called complement
        then we check if complement exist in numMap, in first try it is undefined since numMap object is empty
        if it is undefined we added to the object with values of number itself and index as a key-value pair
        after this we continue to array and when we find a value we return correct number and index of it

        if i would explain it with an example
        lets say we have an array of [1,2,7,5] and target value is 3 

        we will start with index 0 which is '1' 
        then we will exclude 1 from 3 so complement value will be 2 
        we will check if complement value2 exists in numMap, it doesnt yet because object is empty
        so we will add '1' with its index value of '0' to our object

        then we start second iteration with index of 1 which is '2'
        we will exclude 2 from target '3' so our complement value will be '1'
        we will check if 1 exists in our object which it doest because we added it after first iteration
        since it does exist it means our complement value we added in previou iteration and our current value are complementary values for target
        and in conclusion we return their indices  

        */
        let complement = target - nums[i]
        if(numMap[complement] !== undefined) {
            return [numMap[complement], i]
        }
        numMap[nums[i]] = i
    }
}


console.log(twoSumMap([1,2,3,4],7))