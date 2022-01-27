b = c = 0
for a in range (101):
    b += a ** 2
    c += a
else:
    print(c ** 2 - b)