/*
Description:

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

    Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of ProjectEuler.net
*/

function solution(number){

var multiples = [];

// create an Array with all the multiples
  for(i = 0 ; i < number; i++){
    if(i % 3 === 0 || i % 5 === 0){
      multiples.push(i); 
    }
  }  

//if the array is empty return 0, otherwise, return the sum of the multiples using .reduce
  if (multiples.length === 0){
    return 0;
  } else {
   return multiples.reduce(function(a, b){return a + b;});
  }
}