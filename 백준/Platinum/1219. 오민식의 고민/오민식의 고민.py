# 오만식의 고민

import sys
input = sys.stdin.readline

N, startCity, endCity, M = map(int, input().split())
arr = []
maxGain = [-sys.maxsize] * (N)

for _ in range(M):
    s, e, w = map(int, input().split())
    arr.append((s,e,w))

benefit = list(map(int, input().split()))

maxGain[startCity] = benefit[startCity]

for i in range(N + 101):
    for s,e,w in arr:
        if maxGain[s] == -1* sys.maxsize:
            continue
        elif maxGain[s] == sys.maxsize:
            maxGain[e] = sys.maxsize
        elif maxGain[s] - w + benefit[e] > maxGain[e]:
            maxGain[e] = maxGain[s] -w + benefit[e]
            if i >= N - 1:
                maxGain[e] = sys.maxsize
          
if maxGain[endCity] == -sys.maxsize:
    print("gg")
elif maxGain[endCity] == sys.maxsize:
    print("Gee")
else:
    print(maxGain[endCity])