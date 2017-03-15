/*
Description:

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

*/

function disemvowel(str) {
/*Convert to array and use a filter, .test() return treu/false
  if there is a match on the Regexp, that way we can use .filter()
  then .join() to convert to string
  
  Regexp --
  ^ ->it matches anything that is not enclosed in the brackets
  /g global 
  /i case insensitive*/
  
   return str.split("").filter(function (item){
     return /[^aeiou]/gi.test(item)}).join("");
}