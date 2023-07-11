# 수 묶기

from queue import PriorityQueue
import sys
input = sys.stdin.readline

negativeQueue = PriorityQueue()
positiveQueue = PriorityQueue()
zero = []
one = []
result = 0

N = int(input())
for _ in range(N):
    num = int(input())
    if num < 0:
        negativeQueue.put(num)
    elif num == 0:
        zero.append(0)
    else:
        if num == 1:
            one.append(1)
        else:
            positiveQueue.put((-num, num))

while negativeQueue.qsize() > 1:
    first = negativeQueue.get()
    second = negativeQueue.get()
    result += (first * second)

if not negativeQueue.empty():
    if not zero:
        result += (negativeQueue.get())

result += len(one)

while positiveQueue.qsize() > 1:
    first = positiveQueue.get()[1]
    second = positiveQueue.get()[1]
    result += (first * second)

if not positiveQueue.empty():
    result += positiveQueue.get()[1]

print(result)
