/*

JAVASCRIPT:
// The "5" is how many pieces you put in.
sixToast(5);
// It should return 1.
function sixToast(num) {
// code
return 1;
}

*/

function sixToast(num) {
  return (num - 6) < 0 ? (num - 6) * -1 : (num - 6);
}