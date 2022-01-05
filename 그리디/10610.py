#30
result = 0
N = input()
N = int(''.join(sorted(N, reverse=True)))
if N % 10 != 0:
    result = -1
else:
    N = N // 10
    if N % 3 != 0:
        result = -1
    else:
        result = N*10
print(result)
