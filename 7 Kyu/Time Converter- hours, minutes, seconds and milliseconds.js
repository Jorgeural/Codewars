/*
Description:

Given a time in a time format class, return it without year, month and day.

It should return a string including milliseconds with 3 decimals.

Example:

new Date(2016, 2, 8, 16, 42, 59)
//Should return: 
"16:42:59,000"

*/

function convert(time){
  var hours = time.getHours().toString();
  var minutes = time.getMinutes().toString();
  var seconds = time.getSeconds().toString();
  var milliseconds = time.getMilliseconds().toString();

  if(hours.length < 2) {hours = "0" + hours};
  if(minutes.length < 2) {minutes = "0" + minutes};
  if(seconds.length < 2) {seconds = "0" + seconds};
  switch (milliseconds.length){
    case 1:
      milliseconds = "00" + milliseconds;
      break;
    case 2:
      milliseconds = "0" + milliseconds;
      break; 
}


   return hours + ":" + minutes + ":" + seconds + "," + milliseconds;
  
}