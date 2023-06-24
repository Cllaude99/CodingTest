# 좋은 수 구하기

N = int(input())
numList = list(map(int, input().split()))
numList.sort()
count = 0

for i in range(N):
    start = 0
    end = N - 1
    while start < end:
        if numList[start] + numList[end] == numList[i]:
            if start != i and end != i:
                count += 1
                break
            elif start == i:
                start += 1
            else:
                end -= 1
        elif numList[start] + numList[end] < numList[i]:
            start += 1
        else:
            end -= 1

print(count)
