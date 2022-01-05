#주유소
result = 0
cityNum = int(input())
distance = list(map(int, input().split()))
price = list(map(int, input().split()))
price.pop()
result = distance[0] * price[0]
priceTemp = price[0]
for i in range(1, cityNum - 1):
    if price[i] < priceTemp:
        priceTemp = price[i]
    result += priceTemp * distance[i]
print(result)


