//   (we use IIFE to remove pollution of the global scopes)
// pollution means every kind of variables /anything declared there)



// NAMED IIFE 
(function chai (){
    console.log(`DB CONNECTED`);
})
();

// SIMPLE IIFE 
// to write multiple IIFE use of semi colon (;) is important 
((name) => {
    console.log(`DB CONNNECTED TWO ${name}`);
})("khan")