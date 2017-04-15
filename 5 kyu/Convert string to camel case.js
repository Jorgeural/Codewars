/*
Description:

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

Examples:

// returns "theStealthWarrior"
toCamelCase("the-stealth-warrior") 

// returns "TheStealthWarrior"
toCamelCase("The_Stealth_Warrior")
*/

function toCamelCase(str){
  if(str){
    return str.replace(/[-_]/g, " " )
      .split(" ")
        .map((item, index) => index > 0 ? item[0].toUpperCase() + item.slice(1) : item)
          .join("");
  } else {
    return "";
  }
}