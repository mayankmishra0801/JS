const string = prompt("Enter a value")
string = string.toLocaleLowerCase()
const palindromrFind=(str)=>{

  var  reverseStr = str.split("").reverse().join("")
  if(reverseStr === str){
    return true;

  } else{
    return false;
  }


}