function x(){
    var a = 7;
    function y(){
        console.log(a);

    }
    // y();
    return y;
}
// x();
var z = x();
console.log(z);
// ...........
z();


// function  bundled together with its lexical scope environment or surrounding state

//  forms a closure
//  