function solution(n) {
    const checkMultiples = (num) => {
        return (num%3 === 0)
    }
    
    const checkContainThree = (num) => {
        const convertedString = String(num);
        return (convertedString.includes('3'))
    }
    
    let answer = 1;
    for(let i = 1; i<=n; i+=1){
        while(checkMultiples(answer) || checkContainThree(answer)){
            answer += 1;
        }
        answer += 1;
    }
    return answer-1;
}