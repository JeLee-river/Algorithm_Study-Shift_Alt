function solution(A,B){
    A.sort((prev, next) => prev - next);
    B.sort((prev, next) => prev - next);
    
    return A.reduce((acc, cur, index) => {
        const target = B[B.length - index - 1];
        return acc + cur * target;
    }, 0);
}