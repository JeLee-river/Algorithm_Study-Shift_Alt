function solution(numbers) {
    const numString = numbers.map((num) => String(num));
    numString.sort((prev, next) => (next + prev).localeCompare(prev + next));
    const answer = numString.join('');
    return answer[0] === '0' ? '0' : answer;
}