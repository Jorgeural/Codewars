/*
Description:

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

*/

function getCount(str) {
  var vowelsArr = str.match(/([aeiou])/g);
  
  //if nothing match the regexp it returns null
  if(vowelsArr == null) {
    return 0;  
  } else {
    return vowelsArr.length;
  }     
}