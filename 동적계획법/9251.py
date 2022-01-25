#LCS(Longest Common Subsequence)
dp = [0]*1000
word = list(input())
word2 = list(input())
for i in range(len(word)):
    cnt = 0
    for j in range(len(word2)):
        if cnt < dp[j]:
            cnt = dp[j]
        elif word[i] == word2[j]:
            dp[j] = cnt + 1
print(max(dp))