/*
Description:
Is Prime

Define a function isPrime that takes one integer argument and returns true or false depending on if the integer is a prime.

Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
Example

isPrime(5)
=> true

Assumptions

    You can assume you will be given an integer input.
    You can not assume that the integer will be only positive. You may be given negative numbers.

*/

function isPrime(num) {
  var divisors = [];
  
  for (i = 0; i <= num; i++){
    if(num%i ==0){
      divisors.push(i);
    }
  }
 
  return divisors.length === 2 ? true : false; 
}