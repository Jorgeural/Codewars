/*
Description:

For this task you will be given an array of numbers, each number in turn has to be cubed and once all numbers have been cubed all of them have to be added to get a final sum.

If the final sum is less than or equal to the maximum value allowed for an Integer return the sum otherwise return "You've pushed me to the max!".

You can assume that you will receive a valid array of numbers.
*/

function maxedOut(arr) {
  var cube = [];
  var sum;
  
  // arr^3 
  for(i=0; i<arr.length; i++){
    cube.push(Math.pow(arr[i],3));
  }
  
  //sum new array using .reduce
  sum = cube.reduce(function(a,b){return a + b;});
    
  if(sum > 9007199254740991){
     return "You've pushed me to the max!";
  } else {
     return sum;
  }
}