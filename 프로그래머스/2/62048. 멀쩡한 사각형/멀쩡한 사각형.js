function solution(w, h) {
    const calculateGreatestDivisor = (num1, num2) => {
        if(num2 === 0){
            return num1;
        }
        
        return calculateGreatestDivisor(num2, num1 % num2);
    }
    
    const greatestDivisor = calculateGreatestDivisor(w, h);
    const widthUnit = w/greatestDivisor;
    const heightUnit = h/greatestDivisor;
    const biggerUnit = Math.max(widthUnit, heightUnit);
    const smallerUnit = Math.min(widthUnit, heightUnit);
    
    let useless = 0;
    let prevHeight = biggerUnit;
    
    for (let i = 1; i <= smallerUnit; i+=1){
        const intercept = biggerUnit * (1 - i/smallerUnit);
        useless += Math.ceil(prevHeight) - Math.floor(intercept);
        prevHeight = intercept;
    }
    
    return h * w - useless * greatestDivisor;
}