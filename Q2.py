n = input()
# 평균 구하기
mylist = list(map(int, input().split()))
mymax = max(mylist)
sum = sum(mylist)
print(sum * 100 / mymax / int(n))
