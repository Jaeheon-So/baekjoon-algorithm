#회의실 배정
listSE = []
endT = 0
result = 0

N = int(input())
for i in range(N):
  start, end = map(int, input().split())
  listSE.append([start, end])
    
listSE = sorted(listSE, key=lambda a: a[0])
listSE = sorted(listSE, key=lambda a: a[1])

for i,j in listSE:
  if i >= endT:
    result = result + 1
    endT = j

print(result)