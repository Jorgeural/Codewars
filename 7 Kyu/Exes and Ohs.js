/*

Description:

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contains any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/

function XO(str) {
  var xCount = 0;
  var oCount = 0;

    if(str.lenth === 0){
      return true;
    } else {
     for(i=0; i<str.length; i++){
        if(str[i]==="x" || str[i]==="X"){
          xCount++;
        } else if (str[i]==="o" || str[i] ==="O"){
          oCount++;
        }
      }
    }

      if(xCount === oCount) {
        return true;
      } else {
        return false;
      }
  
}