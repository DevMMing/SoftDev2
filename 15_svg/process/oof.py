f = open('data.csv', 'r')
raw = f.readlines()
data = []
for i in raw:
    a = i.strip('\n').split(',')
    data.append(a)

print(data)
