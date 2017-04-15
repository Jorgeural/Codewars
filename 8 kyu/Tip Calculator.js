/*

Description:

Write a function, calculateTip(amount, rating) which calculates how much you need to tip based on the total amount of the bill and the service.

You need to consider the following ratings:

    Terrible: tip 0%
    Poor: tip 5%
    Good: tip 10%
    Great: tip 15%
    Excellent: tip 20%

The rating is case insensitive. If an unrecognised rating is input, then you need to return:

    "Rating not recognised" in Javascript, Python and Ruby...
    ...or null in Java

Because you're a nice person, you always round up the tip, regardless of the service.
*/

function calculateTip(amount, rating) {
 switch(rating.toLowerCase()){
   case "terrible":
     return 0;
     break;
   case "poor":
     return Math.ceil(amount * 0.05);
     break;
   case "good":
     return Math.ceil(amount * 0.1);
     break;
   case "great":
     return Math.ceil(amount * 0.15);
     break;
   case "excellent":
     return Math.ceil(amount * 0.2);
     break;
   default:
     return "Rating not recognised";
 }
}