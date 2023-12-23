# 선물 전달

N = int(input())
MOD = 1000000000

arr = [0] * 1000001
arr[1] = 0
arr[2] = 1
arr[3] = 2
for i in range(4, N + 1):
    arr[i] = ((i-1)*(arr[i-1]+arr[i-2])) % MOD

print(arr[N] % MOD)
