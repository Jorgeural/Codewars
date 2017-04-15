/*
Description:

Given an array of numbers (s), check if any of the numbers are the character codes for lower case vowels.

If they are, change the array value to a string of that vowel.

Return the resulting array.
*/

function isVow(a){
 return a.map(a=> {
             if (a == 97 || a == 101 || a == 105 || a == 111 || a == 117){
               return String.fromCharCode(a);
             } else {
               return a;
             } 
           });
}