# 수 정렬하기

N = int(input())
arr = []

for _ in range(N):
    arr.append(int(input()))

for i in range(N-1):
    lastIndex = N - 1
    endIndex = i
    isChanged = False
    while lastIndex != endIndex:
        if arr[lastIndex] < arr[lastIndex - 1]:
            arr[lastIndex - 1], arr[lastIndex] = arr[lastIndex], arr[lastIndex - 1]
            isChanged = True
        lastIndex -= 1
    if not isChanged: break

for v in arr:
    print(v)
    
