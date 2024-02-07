function solution(m, n, puddles) { 
    const dp = Array.from({length: n}, () => Array.from({length: m}, () => null));
    dp[0][0] = 1;

    puddles.forEach(([column, row]) => {
        dp[row-1][column-1] = 0;
    })
    
    for(let row = 0; row <= n-1; row += 1){
        for(let column = 0; column <= m-1; column += 1){
            if(dp[row][column] === null){
                const top = row > 0 ? dp[row-1][column] : 0;
                const left = column > 0 ? dp[row][column-1] : 0;
                dp[row][column] = (top + left) % 1000000007;
            }
        }
    }
    
    return dp[n-1][m-1];
}