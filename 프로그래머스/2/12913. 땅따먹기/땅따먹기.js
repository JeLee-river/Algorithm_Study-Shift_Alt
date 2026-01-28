function solution(land) {
  const rowCount = land.length;
  const colCount = land[0].length;

  const dp = Array.from({ length: rowCount }, () => Array.from({ length: colCount }, () => 0));

  for (let col = 0; col < colCount; col+=1) {
      dp[0][col] = land[0][col];
  }

  for (let row = 1; row < rowCount; row+=1) {
    const prevRowDp = dp[row - 1];

    let bestScore = -Infinity;
    let secondBestScore = -Infinity;
    let bestCol = -1;

    for (let col = 0; col < colCount; col += 1) {
      const score = prevRowDp[col];
      if (score > bestScore) {
        secondBestScore = bestScore;
        bestScore = score;
        bestCol = col;
      } else if (score > secondBestScore) {
        secondBestScore = score;
      }
    }

    for (let col = 0; col < colCount; col+=1) {
      const add = (col === bestCol) ? secondBestScore : bestScore;
      dp[row][col] = land[row][col] + add;
    }
  }

  return Math.max(...dp[rowCount - 1]);
}
