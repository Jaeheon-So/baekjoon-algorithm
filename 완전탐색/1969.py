#DNA
dnas = []
result = []
result2 = 0
N, M = map(int, input().split())
for _ in range(N):
    dnas.append(input())
for j in range(M):
    count = []
    temp = []
    for i in range(N):
        temp.append(dnas[i][j])
    temp.sort()
    max_dna = max(temp, key=temp.count)
    result.append(max_dna)
    count.append(temp.count('A'))
    count.append(temp.count('T'))
    count.append(temp.count('G'))
    count.append(temp.count('C'))
    result2 += N - max(count)
for i in result:
    print(i, end='')
print("")
print(result2)