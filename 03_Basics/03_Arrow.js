const user = {

    username: "shayan ",
    price : 199,

    wellcomeMessage : function(){

        // console.log(`${this,this.username}welcome to website`);
        // console.log(this);

    }
}
// user.wellcomeMessage()
// user.username = "khan "
// user.wellcomeMessage()

// console.log(this);

// function chai(){

//     let username = "shani"
//     console.log(this.username);
// }
// chai()

//  const chai = function(){

//     let username = "shani"
//     console.log(this.username);
// }
const chai = () => {

    let username = "shani"
    console.log(this);
}
// chai()

// const addtwo = (num1 , num2) =>  (num1 + num2)
const addtwo = (num1 , num2) =>  ({username : "hitesh"})

 
console.log(addtwo(3,4));