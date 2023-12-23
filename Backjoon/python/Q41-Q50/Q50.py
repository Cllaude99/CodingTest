# 집합의 표현

import sys
sys.setrecursionlimit(10 ** 6)
input = sys.stdin.readline

N, M = map(int, input().split())
arr = [0 for _ in range(N + 1)]

for i in range(N + 1):
    arr[i] = i


def find(idx):  # 대표노드를 찾아 반환해주는 함수
    if idx == arr[idx]:
        return idx
    else:
        arr[idx] = find(arr[idx])
        return arr[idx]


for _ in range(M):
    menu, first, second = map(int, input().split())
    if menu == 1:
        if find(first) == find(second):
            print("YES")
        else:
            print("NO")
    elif menu == 0:
        arr[find(second)] = find(first)
