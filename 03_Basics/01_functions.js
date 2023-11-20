

function myname(){
    console.log("H");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("h");
}

// myname()   To execute function

// function addtwonumbers(number1 , number2){

// console.log(number1 + number2);
// // }
// function addtwonumbers(number1 , number2){

//     // let result = number1 + number2
//     // return result
// return  number1 + number2
//     }
// const result = addtwonumbers(3,5)

// console.log("result :", result );


// function UserloginMessage(username = "sam"){
//     if(!username){
//         console.log("please enter a username");
//         return

//     }
//     return `${username} just logged in`
// }

// console.log(UserloginMessage("khan"));


function addnumbers(num1 , num2){

    let rs = num1 + num2
    // console.log(num1 + num2);
    return rs
    // return num1 + num2
}
const rs = addnumbers(3,7)
// console.log("result is :", rs );
// console.log(rs);


function calculatecartprice(val1, ...numbr1){

return numbr1
}
console.log(calculatecartprice(200, 700, 800));

const user = {
    username: "hitesh",
    prices : 299
}
function handleAnyobject(anyobject){
    console.log(`username is ${anyobject.username}, and the price is ${anyobject.price}`);
}

// handleAnyobject(user)
handleAnyobject({
    username : "khan",
    price : "399"
})

const newArray = [200, 400, 500]

function returnSecvalue(getArray){

return getArray[2]
}
// console.log(returnSecvalue(newArray));
console.log(returnSecvalue([200, 400, 500,1000]));
