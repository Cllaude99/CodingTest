# 최소 공배수

T = int(input())


def gcd(x, y):
    if y == 0:
        return x
    return gcd(y, x % y)


for _ in range(T):
    A, B = map(int, input().split())
    gcdValue = gcd(A, B)
    print(int(A*B/gcdValue))
