#파도반 수열
t = int(input())
for _ in range(t):
  dp = [0]*101
  dp[1] = 1
  dp[2] = 1
  dp[3] = 1
  n = int(input())
  for i in range(4, n+1):
    dp[i] = dp[i-2] + dp[i-3]
  print(dp[n])
