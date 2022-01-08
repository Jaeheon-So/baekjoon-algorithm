#셀프 넘버
for i in range(1, 10001):
    for j in reversed(range(1, i)):
        temp = j
        while j != 0:
            temp += j%10
            j = j // 10
        if temp == i:
            break
    else:
        print(i)