# 평균 구하기

N = int(input())
scores = list(map(int, input().split()))
maxscore = max(scores)

for i in range(N):
    scores[i] = scores[i] / maxscore * 100

print(sum(scores) / N)
