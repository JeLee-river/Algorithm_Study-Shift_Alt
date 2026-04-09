function solution(n, times) {
    let max = 0;
    for (const time of times) {
        if(max < time) {
            max = time;
        }
    }
    
    const canImmigration = (time) => {
        let totalPeople = 0;
        for (let i = 0; i <= times.length - 1; i += 1) {
            totalPeople += Math.floor(time / times[i]);
        }
        return totalPeople >= n;
    }
    let left = 1;
    let right = max * n;
    let answer = 0;
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        if(canImmigration(mid)) {
            answer = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return answer;
}