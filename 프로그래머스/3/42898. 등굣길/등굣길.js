function solution(m, n, puddles) {
    const dp = Array.from({length: n + 1}, () => Array.from({length: m + 1}, () => 0));
    dp[1][1] = 1;
    
    for (const [column, row] of puddles) {
        dp[row][column] = -1;
    }
    
    for (let row = 1; row <= n; row += 1) {
        for (let column = 1; column <= m; column += 1) {
            if(dp[row][column] === -1) {
                dp[row][column] = 0;
                continue;
            }
            
            if(row === 1 && column === 1) continue;
            
            dp[row][column] = (dp[row - 1][column] + dp[row][column - 1]) % 1000000007;
        }
    }
    
    return dp[n][m] % 1000000007
}