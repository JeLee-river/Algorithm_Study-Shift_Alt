function solution(land) {
    const dp = Array.from({length: land.length}, () => Array.from({length: 4}, () => 0));
    land.forEach((stage, stageIndex) => {
        if(stageIndex === 0){
            dp[0] = stage;
        } else {
            stage.forEach((score, index) => {
                const totalScore = [];

                for (let i = 0; i <= 3; i+=1){
                    if(i !== index){
                        const scoreSum = dp[stageIndex-1][i] + score;
                        totalScore.push(scoreSum);
                    }
                }

                const biggest = Math.max(...totalScore);
                dp[stageIndex][index] = biggest;
            });  
        }
    });
    
    return Math.max(...dp.pop());
}