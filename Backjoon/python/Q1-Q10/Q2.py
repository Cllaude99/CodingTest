# 평균 구하기

N = int(input())
scores = list(map(int, input().split()))
maxScore = max(scores)

for i in range(N):
    scores[i] = scores[i] / maxScore * 100

print(sum(scores) / N)
