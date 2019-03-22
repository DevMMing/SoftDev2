#gdp per capita and unemployment
f = open('gdp.txt', 'r')
raw = f.readlines()
data = []

for i in raw:
    a = i.split(',')
    #data[a[0]] = a[1].strip('\n')
    data.append([a[0], a[1].strip('\n') ])

#print(data)

g = open('unemployment.txt', 'r')
raw2 = g.readlines()
data2 = []
for j in raw2:
    a = j.split(',')
    data2.append([a[0], a[1].strip('\n') ])
#print(data2)

for i in data2:
    country = i[0]
    for j in data:
        if country == j[0]:
            j.append(i[1])

i = 0
while i < len(data):
    if len(data[i]) < 3:
        del data[i]
    i += 1

final = sorted(data, key=lambda x:int(x[1]))
out = ''
for i in final:
    if len(i) == 3:
        out += i[0] + ',' + i[1] + ',' + i[2] + '\n'


nice = open('data.csv', 'w')
nice.write(out)
