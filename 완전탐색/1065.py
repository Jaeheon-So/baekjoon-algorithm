#한수
N = int(input())
result = N
for i in range(1, N+1):
    temp = []
    while i != 0:
        temp.append(i % 10)
        i = i // 10 
    if len(temp) < 3:
        continue
    dif = temp[0] - temp[1]
    for j in range(1, len(temp)-1):
        if dif != (temp[j] - temp[j+1]):
            result -= 1
            break
print(result)