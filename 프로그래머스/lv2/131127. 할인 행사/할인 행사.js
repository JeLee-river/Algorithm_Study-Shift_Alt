function solution(want, number, discount) {
    const wishList = new Map();
    for (let i = 0; i<=want.length-1; i++) {
        wishList.set(want[i], number[i]);
    }
    
    let answer = 0;

    for (let i = 0; i<=discount.length-9; i++) {
        const copiedList = new Map(wishList);
        const targetDuration = discount.slice(i, i+10);
        for (let discountProduct of targetDuration) {
            const wishListCount = copiedList.get(discountProduct);    
            if(!copiedList.has(discountProduct)) {
                continue;
            }
            if(wishListCount >= 2) {
                copiedList.set(discountProduct, wishListCount-1);
            } else {
                copiedList.delete(discountProduct);
            }
        }    
        if(copiedList.size === 0) {
            answer ++;
        }
    }
    return answer;   
}