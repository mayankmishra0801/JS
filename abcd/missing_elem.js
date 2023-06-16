const arrNum = [3,4,78]

const missArray = []
const missValue = (arr)=>{
    const minValue = Math.min(...arr)
    const maxValue = Math.max(...arr)
    for(let i = minValue;i<maxValue;i++){
        if(arr.indexOf(i)<0){
            missArray.push(i)
        }
    }

    return(missArray)
}

console.log(missValue(arrNum))