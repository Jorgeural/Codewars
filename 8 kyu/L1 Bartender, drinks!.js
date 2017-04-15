/*

Description:

Write a function getDrinkByProfession that receives as input parameter a string, and produces outputs according to the following table:

Input 	Output
"Jabroni" 	"Patron Tequila"
"School Counselor" 	"Anything with Alcohol"
"Programmer" 	"Hipster Craft Beer"
"Bike Gang Member" 	"Moonshine"
"Politician" 	"Your tax dollars"
"Rapper" 	"Cristal"
anything else 	"Beer"

Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer."

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, getDrinkByProfession("pOLitiCIaN") should still return "Your tax dollars".
*/

function getDrinkByProfession(param){
 var dicc = { jabroni: "Patron Tequila", schoolcounselor: "Anything with Alcohol", programmer: "Hipster Craft Beer",
 bikegangmember: "Moonshine",   politician:  	"Your tax dollars" , rapper: "Cristal"  };
 
 var param2 = param.toLowerCase().split(" ").join("");
 
 return dicc[param2] || "Beer";
}