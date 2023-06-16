var arr1 = [2,4,6,4];
var arr2 = [4,6,7,4];

var unionArr = [...arr1,...arr2]
console.log([...new Set(unionArr)])

var intersect = arr1.filter((elem)=>{
  return arr2.includes(elem)
})

console.log([...new Set (intersect)])

