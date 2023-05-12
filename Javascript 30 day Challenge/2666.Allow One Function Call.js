//Day 8 - Javascript 30 day challenge


/* 
Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.
The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined. */


// ---- SOLUTION ----

/*     I check if the function has been called before and if didnt, it calls the function returns the result and
turns "called" into true so when we try to call it again it will just turn undefined

 */

var once = function(fn) {
    let called = false;
    return function(...args){
      if (!called){
      called = true
      return  fn(...args)
    }
    }
}