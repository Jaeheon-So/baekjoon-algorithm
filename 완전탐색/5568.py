#카드 놓기
from itertools import permutations

result = []
n = int(input())
k = int(input())
nums = []
for i in range(n):
    nums.append(input())
p = list(permutations(nums, k))
for i in range(len(p)):
    temp = ""
    for j in range(k):
        temp += p[i][j]
    result.append(temp)
result = set(result)
print(len(result))
