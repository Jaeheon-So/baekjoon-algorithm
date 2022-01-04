#동전 0
list_coin = []
N,K = input().split()
N = int(N)
K = int(K)
result = 0

for i in range(N):
  coins = int(input())
  list_coin.append(coins)

for coin in reversed(list_coin):
  result = result + K // coin
  K = K % coin

print(result)