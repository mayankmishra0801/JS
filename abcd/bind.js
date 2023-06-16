let name= {
    firstname:"Aky",
    lastname:"Hello",
    // abc:function(){
    //     console.log(this.firstname + "" + this.lastname);

    // }
}


let name2 = {
    firstname:"Hii",
    lastname:"Hero"
}

let fullname = function(hometown,state){
  console.log(this.firstname + " " + this.lastname + "from" + hometown + "," + state) 

}

fullname.call(name2,"Dehradun","UK");

fullname.apply(name2,["Mubmbai","Maharastra"])

// in call method we psaaa argumanr individually. separated

// in apply method we supply as arraylist

let fullname1 = fullname.bind(name2,"Mumbai","Maharastra");
fullname1();

//does not call directly

//bind gives us copy which can be called later ratther than
// directly invoking instanceof.
