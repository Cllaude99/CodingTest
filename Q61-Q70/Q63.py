# 케빈 베이컨의 6단계 법칙

from queue import PriorityQueue
import sys
input = sys.stdin.readline

N, M = map(int, input().split())
arr = [[sys.maxsize for j in range(N + 1)] for i in range(N + 1)]
queue = PriorityQueue()

for i in range(1, N + 1):
    arr[i][i] = 0

for _ in range(M):
    f, s = map(int, input().split())
    arr[f][s] = 1
    arr[s][f] = 1

for K in range(1, N + 1):
    for S in range(1, N + 1):
        for E in range(1, N + 1):
            arr[S][E] = min(arr[S][E], arr[S][K] + arr[K][E])

for i in range(1, N + 1):
    queue.put((sum(arr[i][1:]), i))

print(queue.get()[1])
