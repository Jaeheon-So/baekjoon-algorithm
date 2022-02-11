#보석 도둑***
import heapq
import sys
input = sys.stdin.readline

listMV = []
listC = []
temp = []
result = 0
N, K = map(int, input().split())
for i in range(N):
    M, V = map(int, input().split())
    heapq.heappush(listMV, [M,V])
for i in range(K):
    C = int(input())
    listC.append(C)
listC.sort()

for i in listC:
    while listMV and i >= listMV[0][0]:
        M, V = heapq.heappop(listMV)
        heapq.heappush(temp, -V)
    if temp:
        result -= heapq.heappop(temp)

print(result)
