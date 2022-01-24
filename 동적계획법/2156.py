#포도주 시식
wine = [0]*10000
dp = [0]*10000
n = int(input())
for i in range(n):
    a = int(input())
    wine[i] = a
dp[0] = wine[0]
dp[1] = wine[0] + wine[1]
dp[2] = max(dp[1], wine[0]+wine[2], wine[1]+wine[2])
for i in range(3, n):
    dp[i] = max(dp[i-3]+wine[i-1]+wine[i], dp[i-2]+wine[i], dp[i-1])
print(max(dp))

