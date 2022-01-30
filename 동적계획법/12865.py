#평범한 배낭
things = []
n, k = map(int, input().split())
dp = [0]*n
for _ in range(n):
    w, v = map(int, input().split())
    things.append([w, v])

print(things)

# dp[0] = things[0][1]
# temp = things[0][0]
for i in range(n):
    temp = things[i][0]
    for j in range(i+1, n):
        if temp+things[j][0] < k:
            temp += things[j][0]
            dp[i] = dp[i-1] + things[j][1]
        else:
            dp[i] = max(dp[i], things[j][1])
print(dp)