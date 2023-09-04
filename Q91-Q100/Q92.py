# 빌딩 순서 구하기

N, L, R = map(int, input().split())
DP = [[[0 for k in range(N + 1)] for j in range(N + 1)] for i in range(N + 1)]
MOD = 1000000007
DP[1][1][1] = 1

for i in range(2, N + 1):
    for j in range(1, L + 1):
        for k in range(1, R + 1):
            DP[i][j][k] = (DP[i-1][j-1][k] +
                           DP[i-1][j][k-1] + (DP[i-1][j][k] * (i - 2))) % MOD

print(DP[N][L][R])
