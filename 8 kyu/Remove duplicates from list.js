/*
Description:

Write function distinct that removes duplicate from list of numbers.

The order of the sequence needs to stay the same.
*/

function distinct(a) {
  return a.filter(function (item, index, array) { 
    return array.indexOf(item) == index;
  });
}