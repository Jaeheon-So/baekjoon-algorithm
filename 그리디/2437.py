#저울***
N = int(input())
listW = list(map(int, input().split()))
listW.sort()
result = 1
for w in listW:
    if result >= w:
        result += w
    else:
        break
print(result)