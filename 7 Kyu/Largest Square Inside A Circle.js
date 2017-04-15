/*
Description:

Determine the area of the largest square that can fit inside a circle with radius r.
*/

function areaLargestSquare(r) {

//Teorema de Pitagoras el diametro del circulo = a la hipotenusa del cuadrado
  var side = r * (Math.sqrt(2));
  
  return Math.floor(side * side);
}