# 스택으로 수열 만들기

import sys
input = sys.stdin.readline

N = int(input())
sequence = []
stk = []
result = []
for i in range(N):
    sequence.append(int(input()))
sequencePtr = 0
currentNumber = 1
success = True

while sequencePtr < N:
    if not stk or stk[-1] < sequence[sequencePtr]:
        while currentNumber <= sequence[sequencePtr]:
            stk.append(currentNumber)
            currentNumber += 1
            result.append('+')
        stk.pop()
        result.append('-')
        sequencePtr += 1
    elif sequence[sequencePtr] < stk[-1]:
        success = False
        break
    elif sequence[sequencePtr] == stk[-1]:
        stk.pop()
        result.append('-')
        sequencePtr += 1

if success:
    for v in result:
        print(v)
else:
    print("NO")
