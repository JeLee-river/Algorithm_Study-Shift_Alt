from collections import defaultdict
from functools import reduce

def solution(name, yearning, photo):
    yearningScores = defaultdict(int, {name[i]:yearning[i] for i in range(len(name))})
        
    return [reduce(lambda acc,cur: yearningScores[cur]+acc, eachPhoto, 0) for eachPhoto in photo]
    
