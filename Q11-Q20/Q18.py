# ATM (11399)

import sys
input = sys.stdin.readline

N = int(input())
arr = list(map(int, input().split()))
arr.sort()
total = 0

for i in range(N):
    total += sum(list(arr[0:i+1]))    

print(total)



