from functools import reduce
def solution(a, b):
    DAYS = {0:'THU', 1: 'FRI', 2:'SAT', 3:'SUN', 4:'MON', 5:'TUE', 6:'WED'}
    dates = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    targetMonths = dates[0:a-1]
    totalDays = reduce(lambda acc, cur: acc+cur,targetMonths, b);
    return DAYS[totalDays%7]