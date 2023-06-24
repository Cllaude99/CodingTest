# 평균 구하기

N = int(input())
scores = list(map(int, input().split()))
maxValue = max(scores)
sumValue = 0

for i in range(N):
  scores[i] = scores[i]/maxValue*100
  sumValue += scores[i]

print(sumValue / N)

