# DNA 비밀번호

import sys
input = sys.stdin.readline

S, P = map(int, input().split())
DNAString = list(input())
leastNum = list(map(int, input().split()))
count = 0

for i in range(S-P+1):
    start = i
    end = i+P
    candidate = DNAString[start:end]
    if candidate.count('A') >= leastNum[0] and candidate.count('C') >= leastNum[1] and candidate.count('G') >= leastNum[2] and candidate.count('T') >= leastNum[3]:
        count += 1
