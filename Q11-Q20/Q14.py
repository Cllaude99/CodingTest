# 절댓값 힙
from queue import PriorityQueue
import sys
input = sys.stdin.readline

N = int(input())
q = PriorityQueue()

for i in range(N):
    value = int(input())
    if value == 0:
        if q.empty():
            print(0)
        else:
            v = q.get()
            print(v[1])
    else:
        # 튜플의 형태로 값을 저장 + 첫번째 인수값이 동일한 경우 두번째 인수값으로 정렬됨
        q.put((abs(value), value))
