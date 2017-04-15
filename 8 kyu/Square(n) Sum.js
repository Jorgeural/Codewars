/*
Description:

Complete the squareSum method so that it squares each number passed into it and then sums the results together.

For example:

squareSum([1, 2, 2]); // should return 9
*/

function squareSum(numbers){
  return numbers.map(function(a){return Math.pow(a, 2)})
            .reduce(function (a, b){return a + b;});
}