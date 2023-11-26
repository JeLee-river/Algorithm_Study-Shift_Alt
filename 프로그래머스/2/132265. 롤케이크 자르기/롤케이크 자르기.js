function solution(topping) {
    const toppingMenu = new Map();
    let answer = 0;
    
    topping.forEach((menu) => {
        toppingMenu.set(menu, (toppingMenu.get(menu) ?? 0) + 1);
    })
    
    const chulsuTopping = new Map();
    for (let i = 0; i <= topping.length - 1; i++) {
        chulsuTopping.set(topping[i], (chulsuTopping.get(topping[i]) ?? 0) + 1);
        toppingMenu.set(topping[i], toppingMenu.get(topping[i]) - 1);
        
        if(toppingMenu.get(topping[i]) === 0){
            toppingMenu.delete(topping[i]);
        }
        
        if(chulsuTopping.size === toppingMenu.size){
            answer += 1;
        }
    }
    return answer;
}