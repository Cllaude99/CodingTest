# 이항계수 2

N, K = map(int, input().split())
DP = [[0 for j in range(N + 1)] for i in range(N + 1)]
MOD = 10007

for i in range(N+1):
    DP[i][0] = 1
    DP[i][i] = 1
    DP[i][1] = i

for i in range(2, N+1):
    for j in range(2, i+1):
        DP[i][j] = DP[i-1][j-1] % MOD + DP[i-1][j] % MOD

print(DP[N][K] % MOD)
