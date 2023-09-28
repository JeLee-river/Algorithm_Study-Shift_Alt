function solution(n,a,b) {
    let forwardAttendee = Math.min(a,b);
    let backwardAttendee = Math.max(a,b);
    let gameCounter = 1;
    
    while(forwardAttendee + 1 !== backwardAttendee || forwardAttendee%2 === 0) {
        forwardAttendee = Math.ceil(forwardAttendee/2);
        backwardAttendee = Math.ceil(backwardAttendee/2);
        ++gameCounter;
    }
    return gameCounter;
}