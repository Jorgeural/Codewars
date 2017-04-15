/*
Description:

The idea for this Kata came from 9gag today.here

You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet) wiki.

Like this:

Input: If you can read

Output: India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta

Some notes

    Keep the punctuation, and remove the spaces.
    Use Xray without dash or space.

Reference

alt text

You can use the NATO hash with the alphabet
*/

function to_nato(words) {
	var noSpaces = words.split(" ").join("");
  var newArr = [];
  
for(i=0; i<noSpaces.length; i++){

  switch(noSpaces[i]) {
    case "a":
    case "A":
        newArr.push("Alfa");
        break;
    case "b":
    case "B":
        newArr.push("Bravo");
        break;
    case "c":
    case "C":
        newArr.push("Charlie");
        break;
    case "d":
    case "D":
        newArr.push("Delta");
        break;
    case "e":
    case "E":
        newArr.push("Echo");
        break;
    case "f":
    case "F":
        newArr.push("Foxtrot");
        break;
    case "g":
    case "G":
        newArr.push("Golf");
        break;
    case "h":
    case "H":
        newArr.push("Hotel");
        break;
    case "i":
    case "I":
        newArr.push("India");
        break;
    case "j":
    case "J":
        newArr.push("Juliett");
        break;
    case "k":
    case "K":
        newArr.push("Kilo");
        break;
    case "l":
    case "L":
        newArr.push("Lima");
        break;
    case "m":
    case "M":
        newArr.push("Mike");
        break;
    case "n":
    case "N":
        newArr.push("November");
        break;
    case "o":
    case "O":
        newArr.push("Oscar");
        break;
    case "p":
    case "P":
        newArr.push("Papa");
        break;
    case "q":
    case "Q":
        newArr.push("Quebec");
        break;
    case "r":
    case "R":
        newArr.push("Romeo");
        break;
    case "s":
    case "S":
        newArr.push("Sierra");
        break;
    case "t":
    case "T":
        newArr.push("Tango");
        break;
    case "u":
    case "U":
        newArr.push("Uniform");
        break;
    case "v":
    case "V":
        newArr.push("Victor");
        break;
    case "w":
    case "W":
        newArr.push("Whiskey");
        break;
    case "x":
    case "X":
        newArr.push("Xray");
        break;
    case "y":
    case "Y":
        newArr.push("Yankee");
        break;
    case "z":
    case "Z":
        newArr.push("Zulu");
        break;  
    default:
        newArr.push(noSpaces[i]);
    
        }
}
return newArr.join(" ");

  
}