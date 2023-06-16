// M1
// second largest element in an array
// let arr = [0,0,0,4,6,1,0,2,2,2,3,1];

// arr = arr.sort((a,b) => a-b).reverse();
// console.log(arr[1]);

// M-2
// let arr = [2,3,4,5];
// let n = arr.length;
// let highest = -Infinity;
// let secondHighest = -Infinity;

// for(let i = 0;i<n;i++){
//     highest = Math.max(highest,arr[i])


// }
// for(let i = 0;i<n;i++){
//     if(arr[i]<highest){
//         secondHighest = Math.max(secondHighest,arr[i]);

//     }
// }

// console.log(secondHighest);

// console.log(highest)


// M-3
const a = [10,20,90,30]
const large = (arr) =>{
    firstLarge = Math.max(...a)

    index = arr.indexOf(firstLarge)
    arr.splice(index,1)
    secondLarge = Math.max(...arr)

    return(secondLarge)
}
console.log(large(a))
