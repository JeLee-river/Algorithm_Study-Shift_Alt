function solution(n, left, right) {
    const answer = [];
    for (let i = left; i<=right; i++) {
        const raw = Math.floor(i/n) + 1;
        if (Math.floor(i%n+1) <= raw) {
            answer.push(raw);
        } else {
            answer.push(Math.floor(i%n)+1)
        }
    }
    return answer;
}