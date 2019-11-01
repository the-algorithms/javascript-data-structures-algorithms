/*
def merge(A, B):
    # beautiful, but impractical for large N
    if ((len(A) == 0) or (len(B) == 0)):
        return A+B
    else:
        if (A[0] < B[0]):
            return [A[0]] + merge(A[1:], B)
        else:
            return [B[0]] + merge(A, B[1:])

def merge(A, B):
    # iterative (ugh) and destructive (double ugh), but practical...
    C = [ ]
    i = j = 0
    while ((i < len(A)) or (j < len(B))):
        if ((j == len(B)) or ((i < len(A)) and (A[i] <= B[j]))):
            C.append(A[i])
            i += 1
        else:
            C.append(B[j])
            j += 1
    return C

def mergesort(L):        
    if (len(L) < 2):
        return L
    else:
        mid = len(L)//2
        left = mergesort(L[:mid])
        right = mergesort(L[mid:])
        return merge(left, right)

print(mergesort([1,5,3,4,2,0]))
*/
