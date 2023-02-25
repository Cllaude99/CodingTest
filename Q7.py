# 주몽의 명령
N = int(input()) 
M = int(input())
materials = list(map(int, input().split()))
check = []
total = 0

for i in range(len(materials)):
    left = M - materials[i]
    if left in materials:
        if left not in check:
            check.append(materials[i])
            check.append(left)        
            total += 1

print(total)

#투포인터 이용하는 방법
#import sys
# input = sys.stdin.readline
# N = int(input())        
# M = int(input())
# A = list(map(int, input().spli()))
# A.sort()
# count = 0
# i = 0
# j = N - 1
# while i < j:
#   if A[i] + A[j] < M:
#       i += 1
#   elif A[i] + A[j] > M:
#       j -= 1
#   else:
#       count += 1
#       i += 1
#       j += 1
# print(count)