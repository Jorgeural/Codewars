/*
Description:

Complete the solution so that the function will break up camel casing, using a space between words.
Example

solution('camelCasing') // => should return 'camel Casing'*/

// complete the function
function solution(string) {
 var re = new RegExp (/([a-z])([A-Z])/, "g");
 return string.replace(re, "$1 $2");
}