# 숫자의 합 구하기

N = int(input('')) #숫자의 개수
numList = input('') #공백 없이 주어진 N개의 숫자

sum = 0

for i in range(len(numList)):
    sum += int(numList[i])

print(sum)
    

