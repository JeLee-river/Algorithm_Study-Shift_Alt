function solution(s) {
    const numberArray = s.split(' ').map(Number);
    return `${Math.min(...numberArray)} ${Math.max(...numberArray)}`;
}