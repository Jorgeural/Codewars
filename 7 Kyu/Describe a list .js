/*
Description:

Write function describeList which tells if the list is empty or contains only one element or more.
*/

function describeList(x) {
  return x.length === 0 ? "empty" : x.length === 1 ? "singleton" : "longer"; 
}