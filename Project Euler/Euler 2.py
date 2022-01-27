a = 1
b = 0
m = 0
s = 0
while s < 4000000:
    s = a + b
    b, a = a, s
    if s % 2 == 0:
        m += s
print(m)