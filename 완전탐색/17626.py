#Four Squares
def sol(n):
    if int(n**0.5) == n**0.5:
        return 1
    
    for i in range(1, int(n**0.5)+1):
        if int((n - i**2)**0.5) == (n - i**2)**0.5:
            return 2

    for i in range(1, int(n**0.5)+1):
        for j in range(1, int((n-i**2)**0.5)+1): 
            if int((n - i**2 - j**2)**0.5) == (n - i**2 - j**2)**0.5:       
                return 3
    return 4

n = int(input())
print(sol(n))

# dp(동적계획법) 풀이
# n = int(input())
# dp = [0]*(n+1)
# dp[1] = 1

# for i in range(2, n+1):
#     minValue = 5
#     j = 1
#     while (j**2) <= i:
#         minValue = min(minValue, dp[i - (j**2)])
#         j += 1
#     dp[i] = minValue + 1
# print(dp[n])
