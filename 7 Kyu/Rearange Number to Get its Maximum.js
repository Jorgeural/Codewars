/*
Description:

Create function that takes one positive three digit integer and rearranges its digits to get maximum possible number. Assume that argument is integer. Return null (nil for ruby) if argument is not valid.

maxRedigit(123); // returns 321
*/

var maxRedigit = function(num) {
return num && num.toString().length==3 ? Number(num.toString().split("").sort((a,b)=> b - a).join("")) : null;
};