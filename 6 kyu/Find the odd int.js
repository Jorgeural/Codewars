/*
Description:

Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

function findOdd(A) {

var int = {
  value : [],
  times : [],  
};

var count = 0;


//get unique numbers in the array
int.value = A.filter(function (item, i, allItems){
  return i==allItems.indexOf(item);});

//Check how many times each number is repeated. and add the count 
  for(i = 0; i < int.value.length; i++){
    for(j = 0; j < A.length; j++){
      if(int.value[i] == A[j]){
        count++;
        int.times[i] = count;
      }
    }
    count = 0;
  }
  
  //Loop for odd in times, return that position in the values 
  for(k = 0; k < int.value.length; k++){
    if(int.times[k] %2 ===0){
    
    } else {
      return int.value[k];
    }
  }
}