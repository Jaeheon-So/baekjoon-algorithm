#전자레인지
T = int(input("시간을 입력해주세요 : "))
a = T//300
T = T%300
b = T//60
T = T%60
c = T//10
if T%10 != 0:
  print(-1)
else:
  print(a,b,c)