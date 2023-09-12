function solution(k, m, score) {
    const scoreCount = new Map();
    while(score.length > 0){
        const targetScore = score.pop();
        if(scoreCount.has(targetScore)){
            scoreCount.set(targetScore, scoreCount.get(targetScore)+1);
            continue;
        }
        scoreCount.set(targetScore, 1);
    }
    
    const scoreNumber = [...scoreCount.keys()].sort((a,b) => b-a);
    let answer = 0;
    
    scoreNumber.reduce((acc, cur) => {
        if((scoreCount.get(cur) + acc)%m === 0){
            answer += (scoreCount.get(cur) + acc)*cur;
            return 0;
        }
        answer += Math.floor((scoreCount.get(cur) + acc)/m)*m*cur;
        return (scoreCount.get(cur) + acc)%m;
    },0)
    return answer;
}
