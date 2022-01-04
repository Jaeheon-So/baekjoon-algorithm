#ATM
N = int(input())
list_time = list(map(int, input().split()))
list_time.sort()
result = []
time = 0

for i in range(N):
  time = time + list_time.pop(0)
  result.append(time)

print(sum(result))