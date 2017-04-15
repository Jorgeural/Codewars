/*
Description:

Write a program to determine if a string contains all unique characters. Return True/true if it does and False/false otherwise.

The string may contain any of the 128 ASCII characters.
*/

function hasUniqueChars(str){
  return str.split("")
              .map((item, index, self)=> self.indexOf(item) === index)
                .includes(false) ? false : true; 
