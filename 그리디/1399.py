# 단어 수학
alphabet = [0]*26
word = []
result = 0
N = int(input())
for i in range(N):
    word.append(input())

for i in range(N):
    j = 0
    for w in word[i][::-1]:
        alphabet[ord(w) - ord('A')] += (10 ** j) 
        j += 1
alphabet.sort(reverse=True)
for i in reversed(range(10)):
    result += i*alphabet[9-i]
print(result)
