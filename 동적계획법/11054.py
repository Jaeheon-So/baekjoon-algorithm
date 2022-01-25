#가장 긴 바이토닉 부분 수열
n = int(input())
a = list(map(int, input().split()))
dp = [1]*n
dp2 = [1]*n
for i in range(n):
    for j in range(i):
        if a[j] < a[i]:
            dp[i] = max(dp[i], dp[j] + 1)
a.reverse()
for i in range(n):
    for j in range(i):
        if a[j] < a[i]:
            dp2[i] = max(dp2[i], dp2[j] + 1)
dp2.reverse()
print(dp)
print(dp2)
for i in range(n):
    dp[i] += dp2[i] - 1
print(max(dp))