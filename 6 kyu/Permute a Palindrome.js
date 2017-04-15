/*
Description:

Write a function that will check whether the permutation of an input string is a palindrome. Bonus points for a solution that is efficient and/or that uses only built-in Python functions. Deem yourself brilliant if you can come up with a version that does not use any function whatsoever.
Example

madam -> True
adamm -> True
junk -> False
Hint

The brute force approach would be to generate all the permutations of the string and check each one of them whether it is a palindrome. However, an optimized approach will not require this at all.
Fundamentals
Algorithms*/

function permuteAPalindrome (input) { 
// in a palindrome only 1 char can be reapeteated odd times, if the string hase more than 1 char repeated a odd number of times, cant be a palindrome. 
  var removeDuplicates = input.split("").filter(function(item, index, self) {return self.indexOf(item) == index});
  var howManyTimesEachChar = [];
  
  for(i = 0; i < removeDuplicates.length; i++){
    var re = new RegExp(removeDuplicates[i],"g");
    howManyTimesEachChar.push((input.match(re)).length);
  }
  
  var howManyOdds = howManyTimesEachChar.filter(a=> a%2 !== 0).length;
  
  return howManyOdds > 1 ? false : true || true; 
  
}
