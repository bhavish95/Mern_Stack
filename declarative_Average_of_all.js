var arr = [1, 2, 3, 4];
var index=0;
var res = arr.reduce((acc, currValue) => {
    index=index+1;
    return acc + currValue;
}, 0);
var avg=res/index;
console.log(avg);
