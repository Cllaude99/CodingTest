# 최대 공약수

def gcd(x, y):
    if y == 0:
        return x
    return gcd(y, x % y)


A, B = map(int, input().split())
for i in range(gcd(A, B)):
    print(1, end='')
