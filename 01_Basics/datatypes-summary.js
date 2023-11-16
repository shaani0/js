
// primitive datatypes(string,number,boolean,null,undefined,symbol,bigInt)

const score = 100

const scorevalue  = 100.3

const IsloggedIn = false
const outsideTemp = null

let useremail;

const id = Symbol('123');
const anotherId = Symbol ('123');

console.log(id === anotherId);

const bigNumber = 6546545654n


// Non primitive datattypes
// Arrays , objects , functions

const heros = ['superman', 'batman','Ironman'];
let myobj = {
    name : "shayan",
    Age : 22,
}

const myfunction = function(){
    console.log("hello world");
}

console.log(typeof anotherId );


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let myyoutubename = "shayankhan"

let anothername = myyoutubename
 anothername = "shaani"

 console.log(anothername);

 let userone = {
    email :"hitesh@google.com",
    upi : "ht@yhl"
 }

 let usertwo = userone

 usertwo.email = "sk@google.com"

 console.log(userone.email);
 console.log(usertwo.email);