# 쉬운 계단 수

N = int(input())
MOD = 1000000000

arr = [[1 for j in range(10)] for i in range(N + 1)]

for i in range(2, N + 1):
    for j in range(10):
        if j == 0:
            arr[i][j] = arr[i-1][j+1]
        elif j == 9:
            arr[i][j] = arr[i-1][j-1]
        else:
            arr[i][j] = arr[i-1][j-1] + arr[i-1][j+1]

print(sum(arr[N][1:]) % MOD)
