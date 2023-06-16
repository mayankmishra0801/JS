const arrNum = [10,12,12,34]

const sum_of_arr= (arr)=>{
    return arr.reduce((pre,cur)=>{
        return  pre+cur
    })
}
console.log(sum_of_arr(arrNum))