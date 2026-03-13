function solution(triangle) {
    for (let i = 1; i < triangle.length; i += 1) {
        for (let k = 0; k < triangle[i].length; k += 1) {
            const left = triangle[i - 1][k - 1] ?? 0;
            const right = triangle[i - 1][k] ?? 0;
            triangle[i][k] += Math.max(left, right);
        }
    }
    
    return Math.max(...triangle[triangle.length - 1]);
}