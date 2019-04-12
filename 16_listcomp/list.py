upper= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
lower= 'abcdefghijklmnopqrstuvwxyz';
numbers = '1234567890';
other = '. ? ! & # , ; : - _ *';

# ()
 # :
# print(upper)
p = 'Hello1'

# print ([1 for x in p if x in upper]);
def min(s) :
    u = [1 for x in s if x in upper]
    l = [1 for x in s if x in lower]
    n = [1 for x in s if x in numbers]
    if (len(u) >= 1):
        if (len(l) >= 1):
            if (len(n) >= 1):
                return True
    return False

def strength(s) :
    stren = 0;
    u = [1 for x in s if x in upper]
    l = [1 for x in s if x in lower]
    n = [1 for x in s if x in numbers]
    o = [1 for x in s if x in other]

    if (min(s)):
        stren = 10;
        stren += (3*len(u));
        stren += (3*len(l));
        stren += (3*len(n));
        stren += (5*len(o));
        if (stren/10 <= 10):
            return round(stren/10)
        return 10
    return 0


test = 'abc';
test1= 'Abc';
test2 = 'Ab2';
test3 = 'ABcDe4p;'
test4 = 'ABcDe4p;2039'
test5 = 'ABcDe4p;11111111111111111111111111111111111111777777777740./,j'

print(min(test));
print(min(test1));
print(min(test2));
print(strength(test2));
print(strength(test3));
print(strength(test4));
print(strength(test5));
print(strength(test1));
