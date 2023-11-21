const userEmail = []

if (userEmail) {
    console.log("got User Email");
}
else{
    console.log("dont have Email");
}

// FALSY values

// false , 0 , -0 , bigint 0n , null, undefined ,NaN

// truthy values 

// "false", "0", " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyobj ={}

if (Object.keys(emptyobj.length===0)) {
    console.log("object is empty");
}