function solution(arr) {
    arr.sort((a,b) => a-b);
    const biggestNum = arr.pop();
    let leastCommonMultiple = biggestNum;
    for (let multipleNum = 1; ; multipleNum++) {
        leastCommonMultiple = biggestNum * multipleNum;
        let isLeastCommonMultiple = true;
        for (num of arr) {
            if (leastCommonMultiple%num !== 0) {
                isLeastCommonMultiple= false;
                break;
            }
        }
        if(isLeastCommonMultiple) {
            return leastCommonMultiple;   
        }
    }
}