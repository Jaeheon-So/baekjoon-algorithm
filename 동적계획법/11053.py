#가장 긴 증가하는 부분 수열
dp = [1]*1000
a = int(input())
nums = list(map(int, input().split()))
for i in range(a):
    for j in range(i):
        if nums[i] > nums[j]:
            dp[i] = max(dp[j]+1, dp[i]) 
print(max(dp))