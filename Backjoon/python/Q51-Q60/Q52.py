# 거짓말

import sys
sys.setrecursionlimit(10 ** 6)
input = sys.stdin.readline

people, partyNum = map(int, input().split())
truth = list(map(int, input().split()))
arr = [0] * (people + 1)
temp = []
totalCnt = 0

for i in range(people + 1):
    arr[i] = i

def find(idx):
    if idx == arr[idx]:
        return idx
    else:
        arr[idx] = find(arr[idx])
        return arr[idx]

for _ in range(partyNum):
  partyInfo = list(map(int, input().split()))
  party_people = partyInfo[0]
  if party_people > 0:
      subPartyInfo = partyInfo[1:]
      temp.append(subPartyInfo)
      if len(subPartyInfo) > 1:
          repValue = subPartyInfo[0]
          subPartyInfo = subPartyInfo[1:]
          for v in subPartyInfo:
              arr[find(v)] = find(repValue)

if truth[0] == 0:
    print(partyNum)
else:
  truth = truth[1:]
  for party in temp:
    value = party[0]
    success = True
    for v in truth:
       if find(v) == find(value):
          success = False
          break
    if success:
       totalCnt += 1  
  print(totalCnt)


        
        
    
