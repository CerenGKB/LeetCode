/* 
I thought since this question wants to exclude minimum and maximum i can just find them with Math.min 
and Math.max then i can use reduce method to add everything together,extract min-max value and find
the solution by dividing sum to length-2 

 */

/**
 * @param {number[]} salary
 * @return {number}
 */

var average = function(salary) {
  let min = Math.min(...salary)
  let max = Math.max(...salary)
  let sum = salary.reduce((acc, val) => acc + val, 0) - min - max;
  let average = sum / (salary.length - 2)
  return average.toFixed(5)

}