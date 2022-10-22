# 수 정렬하기 **
# 계수 정렬 알고리즘
import sys
n = int(input())
nums = [0] * 10000
for i in range(n):
    num = int(sys.stdin.readline())
    nums[num-1] += 1
for i in range(10000):
    if nums[i] != 0:
        for j in range(nums[i]):
            print(i+1)