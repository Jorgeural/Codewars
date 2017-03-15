/*
Description:

Write function avg which calculates average of numbers in given list.
*/

function find_average(array) {
  return array.reduce(function (a, b){return a +b}) / array.length;
}