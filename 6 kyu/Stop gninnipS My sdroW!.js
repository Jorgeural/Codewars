/*
Description:

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
spinWords( "This is a test") => returns "This is a test"
spinWords( "This is another test" )=> returns "This is rehtona test"

*/

function spinWords(){
//create an Array with the diferent strings
  var newArr = arguments[0].split(" ");
// array with the words spinned  
  var spinnedArr = [];
  
/*Loop the array, is the str has less than 5 chars, push to the spinnedarr without modification
if it has 5 or more reverser the string and push it into the array*/
  for(i = 0; i < newArr.length; i++){
    if(newArr[i].length < 5) {
      spinnedArr.push(newArr[i]);
    } else {
      spinnedArr.push(newArr[i].split("").reverse().join(""));
    }
  }
  
  //join de spinned arr to return a string.
  return spinnedArr.join(" ");
}