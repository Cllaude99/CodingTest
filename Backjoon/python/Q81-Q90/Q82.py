# 사전
import math
aNum, zNum, K = map(int, input().split())

if math.factorial(aNum + zNum) / (math.factorial(aNum) * math.factorial(zNum)) < K:
    print(-1)
else:
    while aNum > 0:
        aNum -= 1
        total = math.factorial(aNum + zNum) / \
            (math.factorial(aNum) * math.factorial(zNum))
        if K <= total:
            print("a", end='')
        else:
            print("z", end='')
            zNum -= 1
            aNum += 1
            K -= total

    while zNum > 0:
        print("z", end='')
        zNum -= 1
