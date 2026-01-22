function solution(n, t, m, p) {
    const lastIndex = m * (t - 1) + p;
    const play = [];
    
    let number = 0;
    while(play.length < lastIndex) {
        const baseNumber = number.toString(n).toUpperCase();
        for (let i = 0; i < baseNumber.length && play.length < lastIndex; i += 1) {
            play.push(baseNumber[i]);
        }   
        
        number += 1;
    }

    return play.filter((num, index) => index % m === (p - 1)).join('');
}