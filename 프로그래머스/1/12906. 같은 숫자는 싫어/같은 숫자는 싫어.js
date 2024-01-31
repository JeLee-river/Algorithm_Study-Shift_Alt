function solution(arr) {
    const answer = [arr[0]];
    let prevIndex = 0;
    let targetIndex = prevIndex + 1;
    
    while(targetIndex <= arr.length - 1){
        const prev = arr[prevIndex];
        if(arr[prevIndex] !== arr[targetIndex]){
            answer.push(arr[targetIndex]);
            prevIndex = targetIndex;
        }
        targetIndex += 1;
    }
    return answer;
}