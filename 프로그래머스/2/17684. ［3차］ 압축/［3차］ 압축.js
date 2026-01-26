function solution(msg) {
    const dictionary = {
      A: 1,  B: 2,  C: 3,  D: 4,  E: 5,  F: 6,
      G: 7,  H: 8,  I: 9,  J: 10, K: 11, L: 12,
      M: 13, N: 14, O: 15, P: 16, Q: 17, R: 18,
      S: 19, T: 20, U: 21, V: 22, W: 23, X: 24,
      Y: 25, Z: 26,
    };
    
    const answer = [];
    for (let i = 0; i < msg.length; i += 1) {
        let target = msg[i];
        let skip = 1;
        while (i + skip < msg.length && dictionary[target + msg[i + skip]]) {
            target += msg[i + skip];
            skip += 1;
        }
        
        answer.push(dictionary[target]);
        
        if (i + skip < msg.length) {
            dictionary[target + msg[i + skip]] = Object.keys(dictionary).length + 1
        }
        
        i += target.length - 1;
    }
    
    return answer;
}