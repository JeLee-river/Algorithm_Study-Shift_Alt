function solution(phone_book) {
    phone_book.sort((a,b) =>{
        return a.localeCompare(b);
    });
    
    for (let targetIndex = 0; targetIndex < phone_book.length - 1; targetIndex += 1) {
        if((phone_book[targetIndex + 1]).startsWith(phone_book[targetIndex])) {
            return false;
        }
    }
    
    return true;
}