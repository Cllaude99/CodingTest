# 다각형의 면적

N = int(input())
arr = []
area = 0

for i in range(N):
    arr.append(tuple(map(int, input().split())))

arr.append(arr[0])

for i in range(N):
    x1, y1 = arr[i]
    x2, y2 = arr[i + 1]
    area += (x1*y2 - x2*y1)

print(round(abs(area) / 2, 1))
