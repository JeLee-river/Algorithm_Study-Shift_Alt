function solution(clothes) {
    const clothesList = new Map(clothes);
    const clothesClassList = Array.from(clothesList.values());
    const clothesClassHash = new Map();
    for (let clothesClass of clothesClassList) {
        clothesClassHash.set(clothesClass, (clothesClassHash.get(clothesClass)??0) + 1);
    }
    const totalClothesChoices = Array.from(clothesClassHash.values());
    const totalChoices = totalClothesChoices.reduce((acc, cur) => {
        return acc*(cur+1);
    },1);
    return totalChoices - 1;
}