//Day 1-Javascript 30 day challenge


//Write a function createHelloWorld. It should return a new function that always returns "Hello World".



/**
 * @return {Function}
 */

 
var createHelloWorld = function() {
    return function(...args) {
        return "Hello World"
        
    }
};

