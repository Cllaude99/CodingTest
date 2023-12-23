# 투 포인터

N = int(input())

start = end = 1
sumValue = 0
count = 0

while start <= N:
    if sumValue == N:
        count += 1
        sumValue += end
        end += 1
    elif sumValue < N:
        sumValue += end
        end += 1
    else:
        sumValue -= start
        start += 1


print(count)
