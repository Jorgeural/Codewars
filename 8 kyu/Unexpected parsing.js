/*
Description:

This code is buggy. Can you fix it?
*/

function getStatus(isBusy) {
  
   var msg = (isBusy ? "busy" : "available");
  return {
    status: msg
  };
}