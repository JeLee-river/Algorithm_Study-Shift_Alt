function solution(phone_book) {
    const numberHash = new Map()
    phone_book.forEach((number) => {
        numberHash.set(number, number);
    })
    
    for (let number of phone_book){
        for(let i = 1; i <= number.length-1; i++){
            const slicedNumber = number.slice(0,i)
            if(numberHash.has(slicedNumber)){
                return false;
            }
        }
    }
    return true;
}