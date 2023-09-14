function calcFibonacci(num) {    
    if (num === 2) return 1%1234567;
    if (num === 3) return 2%1234567;
    
    let fiboOperand = [1%1234567, 2%1234567];
    let newOperand;
    for (let i = 4; i <= num; i++) {
        if(i === num) return (fiboOperand[0] + fiboOperand[1])%1234567;
        newOperand = fiboOperand[0]%1234567 + fiboOperand[1]%1234567;
        fiboOperand = [fiboOperand[1]%1234567, newOperand%1234567];
    }
}

function solution(n) {
    return calcFibonacci(n);
}