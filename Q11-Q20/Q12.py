# 오큰수 구하기
import sys
input = sys.stdin.readline

N = int(input())
numList = list(map(int, input().split()))
stk = []
Result = []

for i in range(N-1, -1, -1):
    while stk and numList[i] >= stk[-1]:
        stk.pop()

    if len(stk) == 0:
        Result.append(-1)
    else:
        Result.append(stk[-1])

    stk.append(numList[i])

for value in Result[::-1]:
    print(value, end=' ')
