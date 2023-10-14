function solution(progresses, speeds) {
    const answer = [];
    const completeDay = progresses.map((completePercent, idx) => {
        return Math.ceil((100-completePercent)/speeds[idx]);
    })
    let completeFeatureCount = 1;
    completeDay.reduce((acc, cur) => {
        if(acc>=cur) {
            ++completeFeatureCount;
            return acc;
        }
        answer.push(completeFeatureCount);
        completeFeatureCount = 1;
        return cur;
    })
    answer.push(completeFeatureCount);
    return answer;
}