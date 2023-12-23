# 불우이웃돕기

from queue import PriorityQueue
import sys
input = sys.stdin.readline

N = int(input())
D = [0] * (N + 1)
for i in range(1, N + 1):
    D[i] = i
queue = PriorityQueue()
edgeNum = 0
totalSum = 0
tempValue = 0

for i in range(1, N + 1):
    numList = list(input())
    for j in range(1, len(numList)):
        value = 0
        if ord(numList[j-1]) >= ord('a') and ord(numList[j-1]) <= ord('z'):
            value = ord(numList[j-1]) - ord('a') + 1
        elif ord(numList[j-1]) >= ord('A') and ord(numList[j-1]) <= ord('Z'):
            value = ord(numList[j-1]) - ord('A') + 27
        if i == j:
            totalSum += value
            continue
        totalSum += value
        queue.put((value, i, j))


def find(idx):
    if idx == D[idx]:
        return idx
    else:
        D[idx] = find(D[idx])
        return D[idx]


success = True

while edgeNum < N - 1:
    if queue.empty():
        success = False
        break
    w, s, e = queue.get()
    if w != 0 and find(s) != find(e):
        tempValue += w
        edgeNum += 1
        D[find(s)] = D[find(e)]

if not success:
    print(-1)
else:
    print(totalSum - tempValue)
