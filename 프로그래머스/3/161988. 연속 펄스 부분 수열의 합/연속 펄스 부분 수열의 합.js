function solution(sequence) {
    const dp = [];
    dp[0] = [sequence[0], -sequence[0]];
    
    for (let i = 1; i <= sequence.length - 1; i += 1) {
        const prev = (i%2 === 0) ? Math.max(sequence[i], dp[i-1][0] + sequence[i]) : Math.max(-sequence[i], dp[i-1][0] - sequence[i]);
        const next = (i%2 === 0) ? Math.max(-sequence[i], dp[i-1][1] - sequence[i]) : Math.max(sequence[i], dp[i-1][1] + sequence[i]);
        dp[i] = [prev, next];
    }
    
    let answer = Number.MIN_SAFE_INTEGER;
    for (const [num1, num2] of dp) {
        if(num1 > answer) {
            answer = num1;
        }
        
        if(num2 > answer) {
            answer = num2;
        }
    }
    
    return answer;
}