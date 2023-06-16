var arr1 = [2,4,6,8]
var arr2 = [4,6,2,8]

const isArraySame = arr1.length == arr2.length && arr1.every((currEle)=>{
    if(arr2.indexOf(currEle) > -1){
        return(currEle = [arr2.indexOf(currEle)])
    }

    
})

console.log(isArraySame)