function solution(answers) {
    const mathHater1Answers = new Map([[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]]);
    const mathHater2Answers = new Map([[0, 1], [1, 3], [2, 4], [3, 5]]);
    const mathHater3Answers = new Map([[0, 3], [1, 1], [2, 2], [3, 4], [4, 5]]);

    const solvedResults = [0, 0, 0];

    for (let idx = 0; idx < answers.length; idx++) {
        const answer = answers[idx];
        const mathHater1Selected = mathHater1Answers.get(idx % 5);
        const mathHater2Selected = (idx % 2 === 0) ? 2 : mathHater2Answers.get(((idx-1 )/ 2) % 4);
        const mathHater3Selected = mathHater3Answers.get(parseInt(idx / 2) % 5);
         
        if (answer === mathHater1Selected) solvedResults[0]++;
        if (answer === mathHater2Selected) solvedResults[1]++;
        if (answer === mathHater3Selected) solvedResults[2]++;
    }

    const maxScore = Math.max(...solvedResults);
    const answer = [];

    solvedResults.forEach((score, idx) => {
        if (score === maxScore) {
            answer.push(idx + 1);
        }
    });

    return answer;
}
