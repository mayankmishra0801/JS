var inputStr = prompt("Enter string to capitalize")

const firstLetterCapital = (str)=>{
    var newStr = str.split(" ")
    var newArr = newStr.map((value)=>{
        return value.charAt(0).toUpperCase()
    })
    return newArr
}


console.log(firstLetterCapital)
