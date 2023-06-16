// when we pass afunction in another function is called callback
// javascript is synchronous single threaded
// callback give access to asynchronous world from syncrounous world using callback
setTimeout(function(){
 console.log("Timer")
},5000)

function x(y){
  console.log("x"); 
  y(); 
}
x(function y(){
    console.log("y")
})
document.getElementById("clickMe").addEventListener("click",function xyz(){
   console.log("Button Clicked")
})

// click is the event,

// evenlisteners are heavy , they need to be remove, it takes memory, it forms a closure , even when the call stack is empty we are not exexuting any code,
// this program not freeing the memeory

// onclick onmousehover  onscroll page can go slow , consuming memory , callback functions holds of the scope