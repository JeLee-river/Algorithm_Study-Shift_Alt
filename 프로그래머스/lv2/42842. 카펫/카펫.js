function solution(brown, yellow) {
    for(let i = 1; i <= Math.sqrt(yellow); i++){
        if(yellow%i === 0){
            let yellowRow = i;
            let yellowColumn = yellow/i;
            if(yellowRow + yellowColumn === (brown - 4)/2){
                return [yellowColumn + 2, yellowRow + 2];
            };
        };
    };    
};