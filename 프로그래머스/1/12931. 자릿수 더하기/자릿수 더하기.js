function solution(n){
    const numberArray = String(n).split('');
    return numberArray.reduce((acc, cur) => acc + Number(cur), 0);
}