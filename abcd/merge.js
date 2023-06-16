const arr1 = [12,23,34]
const arr2 = [23,23,45,56]

const finalArr = arr1.concat(arr2)
const sortedArr = finalArr.sort(function(a,b){
    return a -b
}
)
console.log([...new Set(sortedArr)])
console.log(sortedArr)