# 2*n 타일 채우기

N = int(input())
result = [1] * (N + 1)
MOD = 10007

for i in range(2, N + 1):
    result[i] = (result[i-2] + result[i-1]) % MOD

print(result[N] % MOD)