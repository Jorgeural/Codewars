/*
Description:

Write function parseFloat (for Javascript parseF) which takes a string and returns a number or Nothing (for Python None, for Javascript null) if conversion is not possible.
*/

function parseF(s) {
  var str = String(s);
  return !isNaN(Number(str)) ? Number(str) : null;
}