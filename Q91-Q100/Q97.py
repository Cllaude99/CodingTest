# 선분 방향 구하기

X1, Y1 = map(int, input().split())
X2, Y2 = map(int, input().split())
X3, Y3 = map(int, input().split())

CCW = (X1*Y2 + X2*Y3 + X3*Y1) - (X2*Y1 + X3*Y2 + X1*Y3)

if CCW < 0: print(-1)
elif CCW == 0: print(0)
else: print(1)