/*
Description:

    Task

    Call two arms equally strong if the heaviest weights they each are able to lift are equal.

    Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.

    Given your and your friend's arms' lifting capabilities find out if you two are equally strong.
    Example

    For yourLeft = 10, yourRight = 15, friendsLeft = 15 and friendsRight = 10, the output should be true;

    For yourLeft = 15, yourRight = 10, friendsLeft = 15 and friendsRight = 10, the output should be true;

    For yourLeft = 15, yourRight = 10, friendsLeft = 15 and friendsRight = 9, the output should be false.
    Input/Output

    [input] integer yourLeft

    A non-negative integer representing the heaviest weight you can lift with your left arm.

    [input] integer yourRight

    A non-negative integer representing the heaviest weight you can lift with your right arm.

    [input] integer friendsLeft

    A non-negative integer representing the heaviest weight your friend can lift with his or her left arm.

    [input] integer friendsRight

    A non-negative integer representing the heaviest weight your friend can lift with his or her right arm.

    [output] a boolean value

*/

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  
  var you = [yourLeft, yourRight];
  var friend = [friendsLeft, friendsRight];
  
  var sortedYou = you.sort((a,b) => a - b);
  var sortedFriend = friend.sort((a,b) => a - b);
  
  return sortedYou[0] === sortedFriend[0] && sortedYou[1] === sortedFriend[1];  
}