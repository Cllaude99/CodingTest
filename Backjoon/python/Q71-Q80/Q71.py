import sys
input = sys.stdin.readline

N, M, K = map(int, input().split())
changeCnt = 0
start = 0

while 2**start < N:
    start += 1

arr = [0] * (2**(start + 1))
for i in range(2**start, 2**start + N):
    arr[i] = int(input())
for i in range(2**start - 1, 0, -1):
    arr[i] = arr[2*i] + arr[2*i + 1]


def getIdx(idx):
    global start
    return idx + 2**start - 1


def Change(idx, changeValue):
    changeIdx = getIdx(idx)
    arr[changeIdx] = changeValue

    while changeIdx / 2 >= 1:
        changeIdx = changeIdx // 2
        arr[changeIdx] = arr[2*changeIdx] + arr[2*changeIdx + 1]


def getSum(s, e):
    result = []
    startIdx = getIdx(s)
    endIdx = getIdx(e)

    while startIdx <= endIdx:
        if startIdx % 2 == 1:
            result.append(arr[startIdx])
        if endIdx % 2 == 0:
            result.append(arr[endIdx])
        startIdx = (startIdx + 1) // 2
        endIdx = (endIdx - 1) // 2
    return sum(result)


while changeCnt != K:
    menu, f, s = map(int, input().split())
    if menu == 1:
        Change(f, s)
    elif menu == 2:
        print(getSum(f, s))
        changeCnt += 1
