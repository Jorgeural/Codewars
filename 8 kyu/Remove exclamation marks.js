/*Description:

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.*/

function removeExclamationMarks(s) {
  
  var re = new RegExp ("!","g");

  return s.replace(re, "");
}
