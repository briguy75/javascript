function factorialize(num) {
    if (num === 0) {
        return 1;
    }
    if (num <= 0) {
        return undefined;
    }
    for (var i = num; --i;) {
        num *=i;
    }
    return num;
}

factorialize(5);