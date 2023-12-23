# 신기한 소수
import sys
sys.setrecursionlimit(10**6)
input = sys.stdin.readline

N = int(input())
base = [2, 3, 5, 7]
# 기본적으로 2,3,5,7로 시작되어야 하며 그 뒤에 홀수값인 1,3,5,7,9가 올 수 있다.
# 따라서 1,3,5,7,9를 각각 붙여가면서 소수가 되는지 확인하는 과정을 진행하는 것이 필요하다.


def isPrime(num):  # num값이 소수인지 아닌지를 판별하는 함수
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            return False
    return True


def recursion(num):
    global N
    if len(str(num)) == N:
        print(num)
    else:
        for i in [1, 3, 5, 7, 9]:
            number = 10*num + i
            if isPrime(number):
                recursion(number)


for value in base:
    recursion(value)
