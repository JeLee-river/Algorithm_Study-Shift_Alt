function solution(s) {
    const removedBracket = s.slice(2,-2);
    const tupleArr = removedBracket.split('},{');
    tupleArr.sort((a,b) => a.length - b.length);
    const splitedTuple = tupleArr.join();
    const splitedTupleArr = splitedTuple.split(',');
    const removedDuplication = new Set(splitedTupleArr);
    return Array.from(removedDuplication).map((num) => Number(num))
}