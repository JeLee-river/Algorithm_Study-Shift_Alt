function solution(sticker) {
    if(sticker.length === 1) return sticker[0];
    
    const findMax = (arr) => {
        const length = arr.length;
        if(length === 1) return arr[0];
        
        const dp = Array.from({length: arr.length}, () => 0);
        dp[0] = arr[0];
        dp[1] = Math.max(arr[0], arr[1]);
        
        for (let i = 2; i <= length - 1; i += 1) {
            dp[i] = Math.max(dp[i - 2] + arr[i], dp[i - 1]);
        }
        
        return dp[length - 1];
    }
    
    const chooseFirst = findMax(sticker.slice(0, sticker.length - 1));
    const chooseLast = findMax(sticker.slice(1));
    
    return Math.max(chooseFirst, chooseLast);
}