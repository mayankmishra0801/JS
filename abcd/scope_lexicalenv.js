// function a(){
//   console.log(b);

// }

// var b = 10;
// a();
// 10

function a(){
  c();
    function c(){
        console.log(b);
    }
  
  }
  
  var b = 10;
  a();

// lexical environment is the local memory  along with its lexical environment of its parent.
//    c function is inside a 
//    c is lexically inside a
//    a is lexically inside global scope

