# Shift Alt 알고리즘 스터디
엘리스 SW트랙 알고리즘 스터디

---
## 03.20

### 1. [**소수 찾기**](https://school.programmers.co.kr/learn/courses/30/lessons/12921)  

> 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.  
소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다. (1은 소수가 아닙니다.)  


```JavaScript
function solution(n) {
    let target = [];
    
    if(n>=2){
        target.push(2); //n이 2 이상인 경우, 2는 반드시 소수이므로 미리 target에 push
    }
    
    for(let num = 3; num<=n; num+=2){
        target.push(num);  // 2의 배수는 모두 소수가 아니므로 3,5,7..n을 target에 push
    }
    let answer = target.filter((v) => {
        for(let i = 3; i <= Math.sqrt(v); i+=2){ 
          //소수판별: target에 2의배수는 없으므로 3,5,7..로만 나누어서 나머지가 0인지 판별
            if(v%i === 0){
                return false; //한 번이라도 나누어 떨어지면 즉시 반복문 종료
            }
        }
        return true; // for문을 통과했다면 소수가 맞으므로 true 반환
    })
    return answer.length; //문제에서 원하는 배열의 길이 반환
    
}
```
