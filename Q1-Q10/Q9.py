# DNA 비밀번호

import sys
input = sys.stdin.readline

S, P = map(int, input().split())
DNA = input()
leastNum = list(map(int, input().split()))
arr = [0,0,0,0]
count = 0

def add(letter):
  global arr
  if letter == 'A':
    arr[0] += 1
  elif letter == 'C':
    arr[1] += 1
  elif letter == 'G':
    arr[2] += 1
  elif letter == 'T':
    arr[3] += 1

def sub(letter):
    global arr
    if letter == 'A' and arr[0] > 0:
        arr[0] -= 1
    elif letter == 'C' and arr[1] > 0:
        arr[1] -= 1
    elif letter == 'G' and arr[2] > 0:
        arr[2] -= 1
    elif letter == 'T' and arr[3] > 0:
        arr[3] -= 1

for i in range(P):
  add(DNA[i])

def check():
  for i in range(4):
    if leastNum[i] > arr[i]:
      return False
  return True

if check():
   count += 1

for i in range(S-P):
  start = i
  end = i + P
  sub(DNA[i])
  add(DNA[i + P])
  if check():
     count += 1

print(count)



  
