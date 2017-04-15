/*
Description:

You'll be given a string of characters as an input.

Create a function reverse_slice/reverseSlice that returns a list of strings: (a) in the reverse order of the original string, and (b) with each successive string starting one character further in from the end of the original string.

For example:

'123'  becomes  ['321','21','1']

and

'abcde'  becomes  ['edcba','dcba','cba', 'ba', 'a']

Assume the original string is at least 3 characters long. Try to do this using slices and avoid converting the string to a list.
*/

function reverseSlice(str) {
  var reverse = str.split("").reverse().join("");
  var newArr = [];
  console.log(reverse);
  
  for(i = 0; i < reverse.length;i++){
     newArr.push(reverse.slice(i,reverse.length));
  }
  
  return newArr;
}