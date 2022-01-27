a = 1000
b = 0
c = 0
d = 0
for a in range(1, 1000):
    if a % 3 == 0 or a % 5 == 0:
        b += d
        d += 1
    else:
        d += 1
        c += d
        print(c)
else:
    print(500500 - c)