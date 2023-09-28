function solution(n, a, b) {
  let forwardAttendee = Math.min(a, b);
  let backwardAttendee = Math.max(a, b);
  let gameCounter = 0;

  while (forwardAttendee !== backwardAttendee) {
    forwardAttendee = Math.ceil(forwardAttendee / 2);
    backwardAttendee = Math.ceil(backwardAttendee / 2);
    ++gameCounter;
  }
  return gameCounter;
}