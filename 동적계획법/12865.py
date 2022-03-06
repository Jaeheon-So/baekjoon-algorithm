#평범한 배낭
weight = []
price = []
n, k = map(int, input().split())
dp = [[0]*(k+1) for _ in range(n+1)]
for _ in range(n):
    w, v = map(int, input().split())
    weight.append(w)
    price.append(v)
for i in range(1, n+1):
    for j in range(1, k+1):
        if j < weight[i-1]:
            dp[i][j] = dp[i-1][j]
        else:
            dp[i][j] = max(dp[i-1][j], dp[i-1][j-weight[i-1]] + price[i-1])
print(dp[n][k])
