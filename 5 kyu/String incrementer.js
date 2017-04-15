/*
Description:

Your job is to write a function which increments a string, to create a new string. If the string already ends with a number, the number should be incremented by 1. If the string does not end with a number the number 1 should be appended to the new string.

Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/

function incrementString (strng) {
  if(/\d+$/g.test(strng)){
    // split the string using regexp
    var splitStrng = strng.split(/(\d+)/,2) ;    
    var nextNumber = Number(splitStrng[1]) + 1;
    // check lengths for padding the number
    var toSlice = splitStrng[1].length >= nextNumber.toString().length ? splitStrng[1].length : nextNumber.toString().length; 
    //return padded number
    return splitStrng[0] + ("0000000" + nextNumber).slice(-toSlice); 
  } else {
    return strng + 1;
  }
}