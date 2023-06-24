# 스택으로 수열 만들기

import sys
input = sys.stdin.readline

N = int(input())
goal = [None]*N
Result = ""
lastNum = 1  # 어디까지 스택에 추가해주었는지 기억하기 위한 변수
check = True
stk = []

for i in range(N):
    goal[i] = int(input())

for i in range(N):  # 스택의 peek 값과 주여진 수열의 값들을 비교해가는 과정
    if len(stk) == 0:
        while lastNum <= goal[i]:
            stk.append(lastNum)
            lastNum += 1
            Result += "+"
    if stk[-1] == goal[i]:
        stk.pop()
        Result += '-'
    elif stk[-1] < goal[i]:
        while lastNum <= goal[i]:
            stk.append(lastNum)
            lastNum += 1
            Result += "+"
        stk.pop()
        Result += '-'
    else:
        print("NO")
        check = False
        break

if check:
    for i in range(len(Result)):
        print(Result[i])
