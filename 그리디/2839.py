#설탕 배달***
result = 0
N = int(input())

while N >= 0:
    if N % 5 == 0:
        result += N // 5
        break
    N -= 3
    result += 1    
else:
    result = -1
print(result)