//Day 3- Javascript 30 day challenge


/* Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:
increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
 */


// --SOLUTION --

/*  I thought pretty simple here, i know this is not the fastest solution but i wanted to keep it 
like this since i think it is one of the most easier to read answers
 */


//   @param {integer} init
//   @return { increment: Function, decrement: Function, reset: Function }
 

var createCounter = function(init) {
    let count = init;
  return {
    increment() {
      count++
      return count
    },
    decrement() {
      count--
      return count
    },
    reset() {
      count = init
      return count
    }
  }
};
