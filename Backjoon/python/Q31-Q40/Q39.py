# 소수 & 팰린드롬

import math
N = int(input())
arr = [0] * (10000001)

for i in range(2, len(arr)):
    arr[i] = i

for i in range(2, int(math.sqrt(len(arr)) + 1)):
    if arr[i] == 0:
        continue
    for j in range(i+i, len(arr), i):
        arr[j] = 0


def isPalindrome(num):
    number = list(str(num))
    start = 0
    end = len(number) - 1

    while start < end:
        if number[start] != number[end]:
            return False
        start += 1
        end -= 1
    return True


idx = N
while True:
    if arr[idx] != 0 and isPalindrome(arr[idx]):
        print(arr[idx])
        break
    idx += 1
