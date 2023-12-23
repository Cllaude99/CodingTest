# 회의실 배정

from queue import PriorityQueue
import sys
input = sys.stdin.readline

N = int(input())
que = PriorityQueue()
before = 0
meetings = 0

for _ in range(N):
    start, end = map(int, input().split())
    que.put((end, start))

while not que.empty():
    end, start = que.get()
    if end > before and start >= before:
        before = end
        meetings += 1
    elif end == before and start == end:
        before = end
        meetings += 1

print(meetings)
