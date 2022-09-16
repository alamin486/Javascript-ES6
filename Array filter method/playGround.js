var number=[1,2,3,4,5,6,7]
var result= number.filter((currentValue, index, arr)=>{
    return currentValue>4;
});
console.log(result)
