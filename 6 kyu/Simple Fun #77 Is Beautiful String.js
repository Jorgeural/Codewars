/*
Description:

    Task

    A string is said to be beautiful if "b" occurs in it no more times than "a"; "c" occurs in it no more times than "b"; etc.

    Given a string s, check whether it is beautiful.
    Example

    For s = "bbbaacdafe", the output should be true;

    a   b   c   d   e   f   g ...  z
    |   |   |   |   |   |   |      |
    3 ≥ 3 > 1 ≥ 1 ≥ 1 ≥ 1 > 0 ... ≥0
    It's so beautiful ;-)

    For s = "aabbb", the output should be false;

    a   b   c   d ...  z
    |   |   |   |      |
    2 < 3 > 0 ≥ 0 ... ≥0
    It's not beautiful ;-)

    For s = "bbc", the output should be false.

    a   b   c   d ...  z
    |   |   |   |      |
    0 < 2 > 1 > 0 ... ≥0
    It's not beautiful ;-)

    Input/Output

    [input] string s

    A string of lowercase letters.

    Constraints: 3 ≤ inputString.length ≤ 50.

    [output] a boolean value

*/

function isBeautifulString(s) {
  var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var matches = abc.map(function (a) {
                                      var re = new RegExp(a,"g")
                                      var count =  (s.match(re) || []).length;
                                      return count;
                                      });

  
  for(var i = 0; i < matches.length -1; i++){
    if(matches[i] >= matches[i + 1]) continue;
      return false;
  }

  return true;
}