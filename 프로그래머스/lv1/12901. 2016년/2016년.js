function solution(a, b) {
    const DAYS = {0:'THU', 1: 'FRI', 2:'SAT', 3:'SUN', 4:'MON', 5:'TUE', 6:'WED'};
    const dates = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const targetMonths = dates.slice(0, a-1);
    const totalDays = targetMonths.reduce((acc, cur) => acc+cur,b);
    return DAYS[totalDays%7];
}