function solution(absolutes, signs) {
    return absolutes.reduce((acc, cur, index) => {
        if(signs[index]){
            return acc + cur
        }
        
        return acc - cur;
    },0)
}