# 좋은 수 구하기

N = int(input())
arr = list(map(int, input().split()))
arr.sort()
count = 0

for i in range(N):
    start = 0
    end = N - 1
    while start < end:
        if arr[start] + arr[end] == arr[i]:
            if start != i and end != i:
                count += 1
                break
            elif end == i:
                end -= 1
            else:
                start += 1
        elif arr[start] + arr[end] < arr[i]:
            start += 1
        else:
            end -= 1

print(count)
