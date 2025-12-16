function solution(want, number, discount) {
  const wantTable = new Map();
  want.forEach((p, index) => wantTable.set(p, number[index]));

  const discountTable = new Map();
  const adjustCount = (p, adjustment) => {
    if(!wantTable.has(p)) return;

    const nextCount = (discountTable.get(p) ?? 0) + adjustment;
    if(nextCount === 0) {
        discountTable.delete(p);
    } else {
        discountTable.set(p, nextCount);
    }
  };

  const isMatch = () => {
    for (const [p, count] of wantTable) {
      if((discountTable.get(p) ?? 0) !== count) return false;
    }
      
    return true;
  };

  if(discount.length < 10) return 0;
  discount.slice(0, 10).forEach((p) => adjustCount(p, 1));

  let answer = 0;
  for (let index = 9; index < discount.length; index += 1) {
    if(isMatch()) answer += 1;

    const cannotBuy = discount[index - 9];
    adjustCount(cannotBuy, -1);

    const p = discount[index + 1];
    
    if(p) {
        adjustCount(p, 1);
    }
  }

  return answer;
}
