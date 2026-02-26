function solution(n) {
    const arr = Array.from({length: n + 1}, () => 0);
    arr[1] = 1;
    arr[2] = 2;
    if(n === 1) return arr[1];
    if(n === 2) return arr[2];
    
    let prev1 = arr[1];
    let prev2 = arr[2];
    for (let i = 3; i <= arr.length - 1; i += 1) {
        arr[i] = (prev1 + prev2) % 1000000007;
        prev1 = prev2 % 1000000007;
        prev2 = arr[i] % 1000000007;
    }
    
    return prev2;
}