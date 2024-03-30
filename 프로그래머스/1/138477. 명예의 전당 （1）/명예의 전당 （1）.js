function solution(k, score) {
    const scoreTable = score.reduce((acc, cur, idx) => {
        acc.set(idx, cur);
        return acc;
    }, new Map());
    
    const sortedScorePair = [...scoreTable.entries()];
    sortedScorePair.sort((a,b) => a[1]-b[1]);
    
    sortedScorePair.forEach((pair, idx) => {
        if (idx<k){
            if(pair[0]>=k){
                return;
            }
            
        }
        if(idx<k && pair[0]>=k){
            return;
        }
        if(idx<k)
        
        // 0 1  2   3  4   5   6   = idx (작은 순)
        // 4. 0  2  1   5   3   6   = pair[0]  = score idx(기록) 
        // 1 10 20 100 100 150 200 = pair[1] = score
    });
     return [...scoreTable.values()];
};

 
    // -> index = score 작은 순
    // -> sortedScorePair[0] = score 기록 index
    // -> sortedScorePair[1] = score 점수  

