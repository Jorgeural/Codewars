/*
Description:
Task: Returns the correct song ^_^
*/

function singSong(a,b){
  if(a === b){
    return `I have two ${a}s.`;
  } else if(b) {
    return `Uhh! ${a[0].toUpperCase() + a.substring(1)}-${b}!`;
  } else if (/^[aeiou]/i.test(a)) {
    return `I have an ${a}.`;
  } else {
    return `I have a ${a}.`;
  }
}