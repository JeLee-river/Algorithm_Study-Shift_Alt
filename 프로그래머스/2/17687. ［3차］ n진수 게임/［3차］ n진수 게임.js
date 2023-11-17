function solution(n, t, m, p) {
    let answers = '';
    let targetNumber = 0;
    
    while((answers.length / m) <= t){
        const convertedNumber = targetNumber.toString(n);
        answers += convertedNumber.toUpperCase();
        targetNumber += 1;
    }
    
    const splitedAnswers = answers.split('');
    const playerAnswer = splitedAnswers.filter((num,idx) => {
        if(m === p){
            return (idx+1) % m === 0
        }
        
        return (idx+1) % m === p
    });
    
    return playerAnswer.slice(0,t).join('');
}