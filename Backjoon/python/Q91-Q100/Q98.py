# 선분의 교차여부 구하기
import sys
input = sys.stdin.readline

X1, Y1, X2, Y2 = map(int, input().split())
X3, Y3, X4, Y4 = map(int, input().split())


def CCW(X1, Y1, X2, Y2, X3, Y3):
    temp = (X1*Y2 + X2*Y3 + X3*Y1) - (X2*Y1 + X3*Y2 + X1*Y3)
    if temp > 0:
        return 1
    elif temp < 0:
        return -1
    else:
        return 0


def isOverlab(x1, y1, x2, y2, x3, y3, x4, y4):
    if min(x1, x2) <= max(x3, x4) and min(x3, x4) <= max(x1, x2) and min(y1, y2) <= max(y3, y4) and min(y3, y4) <= max(y1, y2):
        return True
    return False


def isCross(x1, y1, x2, y2, x3, y3, x4, y4):
    abc = CCW(x1, y1, x2, y2, x3, y3)
    abd = CCW(x1, y1, x2, y2, x4, y4)
    cda = CCW(x3, y3, x4, y4, x1, y1)
    cdb = CCW(x3, y3, x4, y4, x2, y2)
    if abc*abd == 0 and cda*cdb == 0:
        return isOverlab(x1, y1, x2, y2, x3, y3, x4, y4)
    elif abc*abd <= 0 and cda*cdb <= 0:
        return True
    return False


cross = isCross(X1, Y1, X2, Y2, X3, Y3, X4, Y4)

if cross:
    print(1)
else:
    print(0)
