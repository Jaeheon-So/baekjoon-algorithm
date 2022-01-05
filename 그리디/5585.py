#거스름돈
result = 0
coins = [500, 100, 50, 10, 5, 1]
M = int(input())
R = 1000 - M
for i in coins:
    result += R // i
    R = R % i
print(result)
