/*
Description:

Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.

function noOdds( values )
*/

function noOdds( values ){
  var evenNumbers = [];
  
  for(i = 0; i < values.length; i++){
    if(i%2 === 0){
      evenNumbers.push(i);
    }
  }
  
  return evenNumbers;
}