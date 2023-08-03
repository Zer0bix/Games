function shortenum(num) {
    var num2 = 0;
    num2 = num;
    while (stop=False) {
        num2 = num2/1000;
        if (num2 < 1000) {
            stop = True;
        }

    }
    
}

function objectToObject(a, b) {
    for (const values in a) {
        if (a.hasOwnProperty(values) && b.hasOwnProperty(values)) {
            b[values] = a[values];
        }
    }
    return b
}