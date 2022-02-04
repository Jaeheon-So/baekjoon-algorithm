#저울*
n = int(input())
weight = list(map(int, input().split()))
weight.sort()
result = 1
for w in weight:
    if result >= w:
        result += w
    else:
        break
print(result)