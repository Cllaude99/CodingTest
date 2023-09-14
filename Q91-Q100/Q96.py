#  가장 긴 증가하는 부분수열

N = int(input())
seq = list(map(int,input().split()))
DP = [0 for i in range(1001)]
arr = []
maxValue = 0

DP[seq[0]] = 1
maxValue = 1
arr.append(seq[0])

for num in seq[1:]:
  if DP[num] == 0 and arr:    
    if max(arr) <= num:
        DP[num] = DP[max(arr)] + 1
        if max(arr) != num:
          arr.append(num)
    else:
       check = False
       for value in arr[-1:-1:-1]:
         if num > value:
           check = True
           DP[num] = DP[value] + 1
           arr.append(num)
           break
       if not check:
         arr.append(num)
         DP[num] = 1        
    arr.sort()
        
print(DP[0])
print(DP[30])
print(DP[50])
print(DP[70])
print(DP[60])