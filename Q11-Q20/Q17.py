# 소트인사이드

import sys
input = sys.stdin.readline

arr = list(input())
arr.sort()
for v in arr[::-1]:
    print(v, end='')
