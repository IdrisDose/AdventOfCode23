with open("input.txt", "r") as file:
    data = file.read()
    buff = []
    for line in data.split("\n"):
        first_found, last_found = None, None
        numbers = []
        for letter in line:
            if letter.isnumeric() == True:
                numbers.append(letter)
        buff.append(numbers)
    print(buff)
    total = 0
    for num in buff:
        if len(num) > 2:
            print(int(num[0] + num[len(num)-1]))
            total += int(num[0] + num[len(num)-1])
        else:
            print(int(num[0] + num[0]))
            total += int(num[0] + num[0])

    print(total)
