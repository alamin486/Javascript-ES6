var number=[1,2,3,4,5,6,7]

var result= number.reduce((prevValue,currentValue)=>{
    return prevValue+currentValue;
},0)

console.log(result)
