# 최솟값 찾기1
import sys
input = sys.stdin.readline
N, L = map(int, input().split())
numList = list(map(int, input().split()))
Result = []

for i in range(N):
    start_index = 0 if i-L+1 < 0 else i-L+1
    end_index = i
    arr = []
    for j in range(start_index, end_index + 1):
        arr.append(numList[j])
    Result.append(min(arr))

print(Result)