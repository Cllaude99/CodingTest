import sys
input = sys.stdin.readline

N, M = map(int, input().split())
treeHeight = 0

while pow(2, treeHeight) < N:
    treeHeight += 1

arr = [sys.maxsize] * pow(2, treeHeight + 1)

for i in range(pow(2, treeHeight), pow(2, treeHeight) + N):
    arr[i] = int(input())
for i in range(pow(2, treeHeight) - 1, 0, -1):
    arr[i] = min(arr[2*i], arr[2*i + 1])


def getIdx(idx):
    global treeHeight
    return idx + pow(2, treeHeight) - 1


def getMin(start, end):
    result = []
    startIdx = getIdx(start)
    endIdx = getIdx(end)
    while startIdx <= endIdx:
        if startIdx % 2 == 1:
            result.append(arr[startIdx])
        if endIdx % 2 == 0:
            result.append(arr[endIdx])
        startIdx = (startIdx + 1) // 2
        endIdx = (endIdx - 1) // 2
    return min(result)


for _ in range(M):
    s, e = map(int, input().split())
    print(getMin(s, e))
