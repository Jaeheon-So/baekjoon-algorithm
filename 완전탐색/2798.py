#블랙잭
N, M = map(int, input().split())
cardNums = list(map(int, input().split()))
cardNums.sort()
temp = 0
result = 0
for i in range(N):
    for j in range(i + 1, N):
        for k in range(j + 1, N):
            temp = cardNums[i] + cardNums[j] + cardNums[k]
            if temp <= M and temp > result:
                result = temp
print(result)