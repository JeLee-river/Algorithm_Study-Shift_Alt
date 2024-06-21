function solution(n, info) {
    const answerList = [];
    const apeachScore = info.reduce((totalScore, currentShot, shotIndex) => {
        if (currentShot > 0) {
            return totalScore + (10 - shotIndex);
        }
        
        return totalScore;
    }, 0);
    
    const stack = [{totalShot: 0, shotStatus: [], score: [apeachScore, 0]}];
    
    while(stack.length > 0) {
        const {totalShot, shotStatus, score} = stack.pop();

        if(shotStatus.length === info.length) {
            if(score[1] > score[0] && totalShot === n){
                answerList.push({shotStatus, diff: score[1] - score[0]});
            }
        } else {
            for (let shot = 0; shot <= n - totalShot; shot+=1) {
                const newTotalShot = totalShot + shot;
                const validShotStatus = [...shotStatus];
                validShotStatus.push(shot);

                const currentIndex = shotStatus.length;
                const shotScore = 10 - currentIndex;
                let newApeachScore = score[0];
                let newRionScore = score[1];

                if(info[currentIndex] < shot) {
                    if(info[currentIndex] > 0) {
                        newApeachScore -= shotScore;
                    }
                    
                    newRionScore += shotScore;
                }

                stack.push({totalShot: newTotalShot, shotStatus: validShotStatus, score: [newApeachScore, newRionScore]}); 
            }
        }
    }
    
    if(answerList.length === 0) return [-1];

    answerList.sort((prev, next) => next.diff - prev.diff);
    const biggestDiff = answerList[0].diff;
    const biggestDiffList = answerList.filter((answer) => answer.diff === biggestDiff);    
    const answers = biggestDiffList.map(({shotStatus}) => shotStatus);
    
    if(answers.length === 1) return answers[0];

    const smallestCounter = Array.from({length: answers.length}, () => 0);
    const shotSet = new Set();
    const targetAnswers = answers.map((answer) => [...answer]);

    while(true) {
        targetAnswers.forEach((answerArr, index) => {
            const targetShot = answerArr.pop();
            shotSet.add(targetShot);
            smallestCounter[index] = targetShot;
        });
        
        if(shotSet.size > 1) {
            const biggestShot = Math.max(...smallestCounter);
            const biggestShotList = smallestCounter.filter((shot) => shot === biggestShot);
            if(biggestShotList.length === 1 && biggestShot !== 0) {
                const answerIndex = smallestCounter.indexOf(biggestShot);
                return answers[answerIndex];
            }
        }

        shotSet.clear();
    }
}