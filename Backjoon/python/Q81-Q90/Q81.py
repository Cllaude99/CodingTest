# 순열의 순서
import math
N = int(input())
numList = list(map(int, input().split()))
arr = [i for i in range(1, N + 1)]

if numList[0] == 1:
    K = numList[1] - 1
    while len(arr) > 1:
        bottom = math.factorial(len(arr) - 1)
        idx = K // bottom
        print(arr.pop(idx), end=' ')
        if idx > 0:
            K -= bottom*idx
    print(arr.pop(0), end=' ')

elif numList[0] == 2:
    rank = 0
    numList = numList[1:]
    for v in range(0, len(numList) - 1):
        rank += math.factorial(len(arr) - 1) * arr.index(numList[v])
        arr.pop(arr.index(numList[v]))
    print(rank + 1)
