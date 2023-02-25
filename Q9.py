# DNA 비밀번호
import sys
input = sys.stdin.readline
S, P = map(int, input().split())
DNAString = input()
check = list(map(int, input().split()))
total = 0

for i in range(S - P + 1):
    start_index = i
    end_index = i + P - 1
    checkString = DNAString[start_index: end_index + 1]
    checkA = checkString.count('A') >= check[0]
    checkC = checkString.count('C') >= check[1]
    checkG = checkString.count('G') >= check[2]
    checkT = checkString.count('T') >= check[3]
    total = total + 1 if (checkA and checkC and checkG and checkT) else total

print(total)