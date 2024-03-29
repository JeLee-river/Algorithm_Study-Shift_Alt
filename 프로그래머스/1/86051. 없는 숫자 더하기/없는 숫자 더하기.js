function solution(numbers) {
    const initial = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const target = initial.filter((num) => !numbers.includes(num));
    return target.reduce((acc, cur) => acc + cur, 0);
}