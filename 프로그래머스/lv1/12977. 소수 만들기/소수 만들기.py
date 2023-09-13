from itertools import combinations
from functools import reduce

def checkPrimeNums(num, acc):
    for division in range(2, int(num**(1/2)) + 1):
        if num % division == 0: return acc
    return acc + 1

def solution(nums):
    selectedNums = list(combinations(nums,3))
    sumResults = reduce(lambda acc, cur: checkPrimeNums(sum(cur), acc), selectedNums, 0)
    
    return sumResults
    