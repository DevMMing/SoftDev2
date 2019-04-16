# pythagorean triplets

def pythag(n):
    a = [(i,j,k) for k in range(n+1) for j in range(k) for i in range (j) if (i**2 + j**2 == k**2) ]
    return a

print(pythag(5))
print(pythag(10))

#def quicksort(n):
    
