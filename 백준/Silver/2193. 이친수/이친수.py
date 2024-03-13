# 이친수 구하기

N = int(input())
result = [0] * (N + 1)

result[1] = 1
for i in range(2, N + 1):
    result[i] = result[i-2] + result[i-1]

print(result[N])