#보물
N = int(input())

A = list(map(int, input().split()))
B = list(map(int, input().split()))
S = 0

for i in range(N):
  minA = min(A)
  maxB = max(B)
  S = S + minA*maxB
  A.remove(minA)
  B.remove(maxB)

print(S)