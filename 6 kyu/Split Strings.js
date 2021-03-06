/*
Description:

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']*/

function solution(str){
  var arr = [];
  
   var newStr = str.length % 2 === 0 ? str : str + "_";
   
   for(var i = 0; i < newStr.length; i += 2){
     arr.push(newStr.substring(i, i+2));
   }
   
   return arr;
}