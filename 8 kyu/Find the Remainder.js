/*
Description:

Write a function that accepts two arguments and returns the remainder after dividing the larger number by the smaller number. Division by zero should return NaN. Arguments will both be integers.
*/

function remainder(a, b){

    if ( a > b) {
      return a%b;
    } else {
      return b%a;
    }
 
}