# 카드 정렬하기

from queue import PriorityQueue
import sys
input = sys.stdin.readline

N = int(input())
q = PriorityQueue()
compareCnt = 0

for _ in range(N):
    q.put(int(input()))

while q.qsize():
    if q.qsize() == 1:
        print(compareCnt)
        break
    else:
        first = q.get()
        second = q.get()
        compareCnt += first + second
        q.put(first + second)
