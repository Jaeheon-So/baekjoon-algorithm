#잃어버린 괄호
result = 0
equation = input().split('-')

for i in equation[0].split('+'):
  result = result + int(i)

for temp in equation[1:]:
  for i in temp.split('+'):
    result = result - int(i)
  
print(result)