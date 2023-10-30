# 오큰수 17298

N = int(input())
arr = list(map(int, input().split()))
stk = []
result = [-1] * N

for i in range(N):
  while stk and arr[stk[-1]] < arr[i]:
    result[stk.pop()] = arr[i]
  stk.append(i)

for value in result:
  print(value, end=' ')