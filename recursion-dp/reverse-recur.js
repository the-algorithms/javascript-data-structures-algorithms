/*
ITERATIVE______
def reverse(s):
    reverse = ""
    for ch in s:
        reverse = ch + reverse
    return reverse

print(reverse("abcd"))

RECURSIVE______
def reverse(s):
    if (len(s) < 2):
        return s
    else:
        mid = len(s)//2
        return (reverse(s[mid:]) +
                reverse(s[:mid]))

print(reverse("abcd"))
*/
