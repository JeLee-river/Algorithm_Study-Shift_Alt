function solution(lottos, win_nums) {
    const defaultWinning = lottos.filter((num) => win_nums.includes(num)).length;
    const expactable = lottos.filter((num) => num === 0).length;
    const worst = (defaultWinning <= 1) ? 6 : 7-defaultWinning;
    const best = (defaultWinning + expactable < 2) ? 6 : 7-(defaultWinning + expactable);
    return [best, worst];
}