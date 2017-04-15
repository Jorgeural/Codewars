/*
Description:

Create a function that returns twice the supplied value unless it is a tricky double.

The trick: if the number passed in is a double, simply return the value that was passed.

Examples of a double number include:

    44
    77
    3333
    8787
    100100

In the example 8787, the number 87 is doubled (appears twice).

trickyDoubles(15)   // should return 30
trickyDoubles(100)  // should return 200
trickyDoubles(4343) // should return 4343
*/

function trickyDoubles(n){
  
  var nStr = n.toString()
  var nHalfStr = nStr.length / 2;
  
  

 if(n > 9 && nStr.substring(0, nHalfStr) === nStr.substring(nHalfStr, nStr.length)){
   return n;
 } else {
   return n * 2;
 }
}