# 오큰수 구하기

N = int(input())
values = list(map(int, input().split()))
stack = []
Result = [-1] * N

for i in range(N):
    while stack and values[stack[-1]] < values[i]:
      Result[stack.pop()] = values[i]
    stack.append(i)

for i in range(N):
   print(Result[i], end=' ')