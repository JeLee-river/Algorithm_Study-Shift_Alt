function solution(n) {
    const totalAnswer = Array.from({length: n}, () => 0);
    totalAnswer[0] = 1%1234567;
    totalAnswer[1] = 2%1234567;
    for (let i = 2; i<= totalAnswer.length-1; i++){
        totalAnswer[i] = (totalAnswer[i-1] + totalAnswer[i-2])%1234567;
    }
    return totalAnswer[n-1];
}
