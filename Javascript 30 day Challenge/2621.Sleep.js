//Day 11 -Javascript 30 day challenge

/* Given a positive integer millis, write an asyncronous function that sleeps for millis milliseconds.
 It can resolve any value. */

// ------ SOLUTION -----

/* I didnt know what async function exactly is but after checking its documentation and implementing it almost identically
it was a very easy question to solve.So as far as i understand async function provides a cleaner way of writing promise 
based functions.Here i create a separate function where i have the promise and timeout.In async function i call resolveAfterX,
which will only return after it is called and finished running

 */

/**
 * @param {number} millis
 */

function resolveAfterX(arg){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve()
        },arg)
    })
}
async function sleep(millis) {
    const result = await resolveAfterX(millis)
    return result
}
