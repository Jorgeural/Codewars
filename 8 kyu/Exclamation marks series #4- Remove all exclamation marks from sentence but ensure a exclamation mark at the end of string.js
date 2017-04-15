/*
Description:

    Description:

    Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.
    Examples

remove("Hi!") === "Hi!"
remove("Hi!!!") === "Hi!"
remove("!Hi") === "Hi!"
remove("!Hi!") === "Hi!"
remove("Hi! Hi!") === "Hi Hi!"
remove("Hi") === "Hi!"

(For C and clojure please use remove_bang as the function name. Also, in C it is expected that the pointer returned by the function was allocated by malloc.

    Note
    Please don't post issue about difficulty or duplicate.

*/

function remove(s){
  return s.replace(/!/g, "") + "!";
}