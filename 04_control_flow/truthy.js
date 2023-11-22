const userEmail = []

// if (userEmail) {
//     console.log("got User Email");
// }
// else{
//     console.log("dont have Email");
// }

// FALSY values

// false , 0 , -0 , bigint 0n , null, undefined ,NaN

// truthy values 

// "false", "0", " ", [], {}, function(){}

if (userEmail.length === 0) {
    // console.log("Array is empty");
}

const emptyobj ={}

if (Object.keys(emptyobj.length===0)) {
    // console.log("object is empty");
}

// NULLISH COALESCING OPERATOR (??)

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = null ?? undefined ?? 20
val1 = null ?? 6 ?? undefined


// console.log(val1);

// TERNIARY OPERATOR 

// condition ? true : false        (SYNTAX)

const teaprice = 50

teaprice <= 30 ? console.log("less than 30") : console.log("more than 30");

