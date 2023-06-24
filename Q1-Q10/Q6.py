# 투 포인터

N = int(input())

count = 1
start = end = 1
sum = 1

while end != N:
    if sum == N:
        count += 1
        end += 1
        sum += end
    elif sum < N:
        end += 1
        sum += end
    else:
        sum -= start
        start += 1

print(count)
