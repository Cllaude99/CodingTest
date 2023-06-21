# 투 포인터
n = int(input())
count = 0
start_index = 1
end_index = 1
sum = 1

while start_index <= end_index: 
    if sum == n:
        count += 1
        end_index += 1
        sum += end_index
    elif sum < n:
        end_index += 1
        sum += end_index
    else:
        sum -= start_index
        start_index += 1

print(count)