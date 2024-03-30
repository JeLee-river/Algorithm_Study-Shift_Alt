function solution(n, m, section) {
    let totalGap = 0;
    let answer = 1;
    for(let i = 0; i <= section.length-2; i+=1){
        const gap = section[i+1] - section[i];
        totalGap += gap;
        
        if(totalGap >= m){
            answer += 1;
            totalGap = 0;
        }
    }
    
    return answer;
}