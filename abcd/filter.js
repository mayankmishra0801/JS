const empArr = [
    {
        name:"King",age:42
    },{
        name:"Rohan",age:20
    },{
        name:"Ra",age:22
    },{
        name:"Da",age:82
    }
];

// const filteredItem = empArr.filter((item)=>{
//     return item.age>30
// })
const filteredItem = empArr.find((item)=>{
    return item.age>30
})
console.log(filteredItem)




