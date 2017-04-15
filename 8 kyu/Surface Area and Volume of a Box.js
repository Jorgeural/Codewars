/*
Description:

Write a function that returns the total surface area and volume of a box as an array: [area, volume].
*/

function getSize(width, height, depth){
  var area = ((width * height) * 2) + ((width * depth) * 2) + ((height * depth) * 2);
  var volume = width * height * depth;
  return [area, volume];
}