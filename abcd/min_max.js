{/* <script>
const arrNumber= [1,2,3,4,5]
const maxFunction=(arr)=>{
    return arr.reduce(function(pre,cur){
        return pre>cur:cur
    })
}

console.log(maxFunction(arrNumber))

</script> */}

let arr = [0,0,0,4,6,1,0,2,2,2,3,1];

arr = arr.sort((a,b) => a-b).reverse();
console.log(arr[1]);


    