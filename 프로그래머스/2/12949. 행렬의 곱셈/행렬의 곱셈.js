function solution(arr1, arr2) {
  const answer = Array.from({ length: arr1.length }, () => Array.from({length: arr2[0].length}, () => 0));

  for (let i = 0; i < arr1.length; i += 1) {
    const row1 = arr1[i];
    const resultRow = answer[i];

    for (let sumIndex = 0; sumIndex < row1.length; sumIndex += 1) {
      const currentElement = row1[sumIndex];
      const row2 = arr2[sumIndex];

      for (let j = 0; j < row2.length; j += 1) {
        resultRow[j] += currentElement * row2[j];
      }
    }
  }

  return answer;
}