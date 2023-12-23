# 조약돌 꺼내기
import sys
input = sys.stdin.readline

M = int(input())
stoneList = list(map(int, input().split()))
K = int(input())

totalStone = sum(stoneList)

arr = [[0 for j in range(totalStone + 1)] for i in range(totalStone + 1)]

for i in range(1, totalStone + 1):
    arr[i][0] = 1
    arr[i][1] = i
    arr[i][i] = 1

for i in range(2, totalStone + 1):
    for j in range(2, i + 1):
        arr[i][j] = arr[i-1][j] + arr[i-1][j-1]

bottom = arr[totalStone][K]
top = 0
for i in range(M):
    top += arr[stoneList[i]][K]

result = top / bottom
print(result)
