/*
Description:

This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd");    // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt");    // "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
  //Create an array of every character to lower case.
	var arr = s.toLowerCase().split("");
  var nTimes = [];
  var tittleCase = [];
  
  //iteratem repeating each character his possition *n times pushing into new array
  for(i = 0 ; i < s.length; i++){
    nTimes.push(arr[i].repeat(i + 1));
  }
  
  //tittleCase the new array. 
 for(j = 0; j < nTimes.length; j++){
   tittleCase.push(nTimes[j].substring(0,1).toUpperCase() + nTimes[j].substring(1, nTimes[j].length));
 }
 
 //join the tittle case array to a str. 
 return tittleCase.join("-");
}