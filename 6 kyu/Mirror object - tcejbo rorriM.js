/*
Description:
Mirror - Mirror

Can you mirror the properties on an object?

Given an object with properties with no value

abc: -
arara: -
xyz: -

Return a new object that have the properties with its mirrored key!

abc: cba
arara: arara
xyz: zyx

"You cannot change the original object, because if you did that the reflection would change."

*/

const mirror = obj => {
    var j ={};

    /* Create a new object so you dont modify the original. 
      Check FOR IN LOOPS for more info. 
      */
    for(var i in obj){
       j[i] = i.split("").reverse().join("");
    }

    return j;

};