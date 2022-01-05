#로프
result = []
rope = []
N = int(input())
for i in range(N):
    maxW = int(input())
    rope.append(maxW)
rope.sort()
for w in rope:
    result.append(w*N)
    N -= 1
print(max(result))