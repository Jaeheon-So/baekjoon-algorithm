#전깃줄
location = []
n = int(input())
dp = [1]*n
for _ in range(n):
    a, b = map(int, input().split())
    location.append([a, b])
location = sorted(location, key=lambda a: a[0])
dp[0] = 1
for i in range(n):
    for j in range(i):   
        if location[j][1] < location[i][1]:
            dp[i] = max(dp[i], dp[j]+1)
print(n-max(dp))