# 퇴사 준비하기

N = int(input())
Info = [0] * (N + 1)
maxBenefit = [0] * (N + 2)

for i in range(1, N + 1):
    Info[i] = tuple(map(int, input().split()))

for i in range(N, 0, -1):
    if i + Info[i][0] > N + 1:
        maxBenefit[i] = maxBenefit[i+1]
    else:
        maxBenefit[i] = max(maxBenefit[i+1], Info[i][1] +
                            maxBenefit[i + Info[i][0]])

print(max(maxBenefit))
