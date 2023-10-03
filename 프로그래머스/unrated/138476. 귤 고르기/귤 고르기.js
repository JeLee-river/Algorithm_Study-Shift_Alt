function solution(k, tangerine) {
    const checkClass = new Map();
    for (let tanClass of tangerine) {
        if(checkClass.has(tanClass)) {
            checkClass.set(tanClass, checkClass.get(tanClass)+1);
            continue;
        }
        checkClass.set(tanClass, 1);
    }
    const checkClassArr = Array.from(checkClass.entries());
    checkClassArr.sort((a,b) => b[1]-a[1]);
    
    let checkTengerineCount = 0;
    let checkClassCount = 0;
    for (let i = 0; i<=checkClassArr.length-1; i++) {
        checkTengerineCount +=  checkClassArr[i][1];
        checkClassCount += 1;
        
        if(checkTengerineCount>=k){
            return checkClassCount;
        }
    }
}