function solution(num) {
    let tryCount = 0;
    
    while(num > 1 && tryCount < 500){
        if(num % 2 === 0){
            num /= 2;
        } else {
            num = num * 3 + 1;
        }
        tryCount += 1;
    }
    
    return num === 1 ? tryCount : -1;
}