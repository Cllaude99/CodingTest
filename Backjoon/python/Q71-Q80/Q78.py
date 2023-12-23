# 부녀회장이 될테야
import sys
input = sys.stdin.readline

arr = [[0 for j in range(15)] for i in range(15)]
for i in range(1, 15):
    arr[0][i] = i
    arr[i][1] = 1

for i in range(1, 15):
    for j in range(2, 15):
        arr[i][j] = arr[i][j-1] + arr[i-1][j]

T = int(input())
for _ in range(T):
    floor = int(input())
    roomNum = int(input())
    print(arr[floor][roomNum])
