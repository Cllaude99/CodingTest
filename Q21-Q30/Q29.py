# 수 찾기

import sys
input = sys.stdin.readline

N = int(input())
arr = list(map(int, input().split()))
M = int(input())
findNumber = list(map(int, input().split()))

arr.sort()


def find(num):
    pl = 0
    pr = N - 1
    success = False

    while pl <= pr:
        x = (pl + pr) // 2
        if arr[x] == num:
            success = True
            break
        elif arr[x] > num:
            pr = x - 1
        else:
            pl = x + 1
    if success:
        print(1)
    else:
        print(0)


for v in findNumber:
    find(v)
