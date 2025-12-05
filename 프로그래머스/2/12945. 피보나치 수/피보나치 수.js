function solution(n) {
    const dp = Array.from({length: n + 1}, () => 0);
    dp[1] = 1;
    
    for (let i = 2; i <= dp.length - 1; i += 1) {
        dp[i] = (dp[i-2] + dp[i-1]) % 1234567;
    }
    
    return dp[n] % 1234567
}