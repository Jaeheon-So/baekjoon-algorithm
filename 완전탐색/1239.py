#일곱 난쟁이
import itertools

height = []
for i in range(9):
    h = int(input())
    height.append(h)
for comb in itertools.combinations(height, 7):
    if sum(comb) == 100:
        comb = list(comb)
        comb.sort()
        for i in comb:
            print(i)
        break