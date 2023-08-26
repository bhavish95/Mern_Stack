var arr = [12, 2, 34, 1, 22, 4];

var res = arr.reduce((result, currentValue) => {
    if (currentValue <= 20) {
        result.push(currentValue);
    }
    return result;
}, []);

console.log(res);
