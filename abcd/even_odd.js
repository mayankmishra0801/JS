const a = [10,12,23,24]

const even = a.filter((item)=>{
    return item%2 === 0
})

const odd = a.filter((item)=>{
    return item%2 !==   0;
})
console.log('Even', even)
console.log('Odd',odd)