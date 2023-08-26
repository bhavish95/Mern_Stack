var arr=[23,12,3,5,6,11,10,98];
function maximum(array){
    let max=array[0];
    for (let i = 0;i< array.length ; i++) {
     if(array[i]>max){
        max=array[i];
     }
    }
    return max;
}
console.log(`MAXIMUM IN ${arr} id ${maximum(arr)}`);
