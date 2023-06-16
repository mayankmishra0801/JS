{/* <script>

 const arrNumber = [1,2,3,4,7]
 const duplicates = arrNumber.filter((ele,index,arr) => arr.indexOf(ele)!==index)
 console.log(duplicates)




</script> */}

const numbers = [2,3,5,3,12,5,12,12,12,7,12,7,12];
// const unique = Array.from(new Set(numbers));

// if(numbers.length === unique.length){
//    console.log(`Array doesn't contain dublicates`)
// }else{
//    console.log(`Array contains dublicates.`);
// }

// check dublicates

// const isDuplicates = numbers.some((item,index)=>index!== numbers.indexOf(item))

// if(!isDuplicates){
//    console.log(`Array does not contain duplicates.`);
// }
// else{
//    console.log(`Array contain duplicates.`);
// }

const duplicates = numbers.filter((item,index) => index!== numbers.indexOf(item))
console.log(duplicates)

