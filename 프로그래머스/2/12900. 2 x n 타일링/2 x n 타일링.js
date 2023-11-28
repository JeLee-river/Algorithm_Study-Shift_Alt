function solution(n) {
    const arrangement = Array.from({length: n}, () => 0);
    arrangement[0] = 1;
    arrangement[1] = 2;
    
    for (let i = 2; i <= n-1; i++){
        arrangement[i] = (arrangement[i-1] + arrangement[i-2])%1000000007;
    }
    
    return arrangement[n-1]
}