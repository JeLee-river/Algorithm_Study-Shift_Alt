function solution(a, b, n) {
    let totalCoke = n;
    let answer = 0;
    while (totalCoke>=a){
        const recievedCoke = Math.floor(totalCoke/a) * b;
        totalCoke = recievedCoke + totalCoke%a;
        answer += recievedCoke;
    };
    return answer;
}