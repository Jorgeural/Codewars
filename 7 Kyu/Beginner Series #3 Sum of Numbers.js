/*
Description:

Given two integers, which can be positive and negative, find the sum of all the numbers between including them too and return it. If both numbers are equal return a or b.

Note! a and b are not ordered!

Example: 
GetSum(1, 0) == 1   // 1 + 0 = 1
GetSum(1, 2) == 3   // 1 + 2 = 3
GetSum(0, 1) == 1   // 0 + 1 = 1
GetSum(1, 1) == 1   // 1 Since both are same
GetSum(-1, 0) == -1 // -1 + 0 = -1
GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2*/

function GetSum( a,b ){
var from;
var to;
var arr = [];

   if(a>b){
    from = b;
    to =a;
   } else {
     from = a;
     to = b
   }
   
   for(var i = from; i <= to; i++){
     arr.push(i);
   }
   
   return arr.reduce((a,b)=> a+b);
}