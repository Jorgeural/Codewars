/*
Description:

This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
*/

function simpleMultiplication(){
 if(arguments[0]%2){
    return arguments[0]*9;
 } else {
    return arguments[0]*8;
 }
}